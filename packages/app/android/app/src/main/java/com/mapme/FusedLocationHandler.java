package com.mapme;

import android.app.Activity;
import android.content.IntentSender;
import android.location.Location;
import android.support.annotation.NonNull;
import android.util.Log;

import com.google.android.gms.common.api.ResolvableApiException;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.LocationSettingsRequest;
import com.google.android.gms.location.LocationSettingsResponse;
import com.google.android.gms.location.SettingsClient;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;

class FusedLocationHandler {
    private static final long INTERVAL = 1000 * 60;
    private static final long FASTEST_INTERVAL = 1000;
    private static final String TAG = "LOCATION_HANDLER";

    private final Activity mActivity;
    private final LocationConsumer mLocationConsumer;

    public interface LocationConsumer {
        void consumeLocation(Location location);
    }

    public FusedLocationHandler(Activity activity, LocationConsumer locationConsumer) {
        mActivity = activity;
        mLocationConsumer = locationConsumer;
    }

    private LocationCallback mLocationCallback = new LocationCallback() {
        @Override
        public void onLocationResult(LocationResult locationResult) {
            for (Location location : locationResult.getLocations()) {
                Log.v("LOCATIONUPDATE", location.toString());
            }
        }
    };

    private FusedLocationProviderClient mFusedLocationClient;

    private LocationRequest mLocationRequest = new LocationRequest()
            .setInterval(INTERVAL)
            .setFastestInterval(FASTEST_INTERVAL)
            .setPriority(LocationRequest.PRIORITY_HIGH_ACCURACY);

    public void start() {
        Log.v(TAG, "Starting location updates");

        mFusedLocationClient = LocationServices.getFusedLocationProviderClient(mActivity);
        LocationSettingsRequest.Builder builder = new LocationSettingsRequest.Builder()
                .addLocationRequest(mLocationRequest);

        // Make sure settings satisfy request
        SettingsClient client = LocationServices.getSettingsClient(mActivity);
        Task<LocationSettingsResponse> task = client.checkLocationSettings(builder.build());
        task.addOnSuccessListener(
                mActivity,
                new OnSuccessListener<LocationSettingsResponse>() {
                    @Override
                    public void onSuccess(LocationSettingsResponse locationSettingsResponse) {
                        mFusedLocationClient.requestLocationUpdates(mLocationRequest,
                                mLocationCallback,
                                null /* Looper */);

                    }
                });

        task.addOnFailureListener(
                mActivity,
                new OnFailureListener() {
                    @Override
                    public void onFailure(@NonNull Exception e) {
                        final int REQUEST_CHECK_SETTINGS = 0x1;

                        if (e instanceof ResolvableApiException) {
                            // Location settings are not satisfied, but this can be fixed
                            // by showing the user a dialog.
                            try {
                                // Show the dialog by calling startResolutionForResult(),
                                // and check the result in onActivityResult().
                                ResolvableApiException resolvable = (ResolvableApiException) e;
                                resolvable.startResolutionForResult(mActivity, REQUEST_CHECK_SETTINGS);
                            } catch (IntentSender.SendIntentException sendEx) {
                                // Ignore the error.
                            }
                        }
                    }
                });
    }

    public void stop() {
        Log.v(TAG, "Stopping location updates");
        mFusedLocationClient.removeLocationUpdates(mLocationCallback);
    }
}