package com.mapme;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.location.Location;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.util.Log;

import com.facebook.react.ReactActivity;
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

public class MainActivity extends ReactActivity {
    private FusedLocationHandler mFusedLocationHandler;

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "mapme";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mFusedLocationHandler = new FusedLocationHandler(
                this,
                new FusedLocationHandler.LocationConsumer() {
                    @Override
                    public void consumeLocation(Location location) {
                        Log.v("LOCATION!", location.toString());
                    }
                });
        mFusedLocationHandler.start();
    }

    @Override
    protected void onPause() {
        super.onPause();

        mFusedLocationHandler.stop();
    }

    @Override
    protected void onResume() {
        super.onResume();

        mFusedLocationHandler.start();
    }
}
