package com.mapme;

import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class LocationManagerModule extends ReactContextBaseJavaModule {
    public LocationManagerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "LocationManager";
    }

    @ReactMethod
    public void startTracking() {
        Toast.makeText(getReactApplicationContext(), "Start tracking", 2500).show();
    }

    @ReactMethod
    public void stopTracking() {
        Toast.makeText(getReactApplicationContext(), "Stop tracking", 2500).show();
    }
}
