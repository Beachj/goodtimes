package org.blockstack.android.sample;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.horcrux.svg.SvgPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rnfs.RNFSPackage;
import ui.photoeditor.RNPhotoEditorPackage;
import com.agontuk.RNFusedLocation.RNFusedLocationPackage;
import ui.apptour.RNAppTourPackage;
import com.bottomsheetbehavior.BottomSheetBehaviorPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import org.reactnative.camera.RNCameraPackage;
import me.jhen.devsettings.DevSettingsPackage;
import li.yunqi.rnsecurestorage.RNSecureStoragePackage;
import com.bitgo.randombytes.RandomBytesPackage;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import io.radar.react.RNRadarPackage;
import com.airbnb.android.react.maps.MapsPackage;


import org.blockstack.reactnative.RNBlockstackSdkPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import io.radar.sdk.Radar;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.rnpermissions.RNPermissionsPackage;


public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      String publishableKey = BuildConfig.RADAR_KEY;
      Radar.initialize(publishableKey);
  

      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new SvgPackage(),
            new RNFetchBlobPackage(),
            new RNFSPackage(),
            new RNPhotoEditorPackage(),
            new RNFusedLocationPackage(),
            new RNAppTourPackage(),
            new BottomSheetBehaviorPackage(),
            new AsyncStoragePackage(),
            new LinearGradientPackage(),
            new RNGestureHandlerPackage(),
            new GeolocationPackage(),
            new RNCameraPackage(),
            new DevSettingsPackage(),
            new RNSecureStoragePackage(),
            new RandomBytesPackage(),
            new ReactNativeConfigPackage(),
            new RNRadarPackage(),
            new MapsPackage(),
            new RNBlockstackSdkPackage(),
              new VectorIconsPackage(),
              new RNPermissionsPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

    long size = 999L * 1024L * 1024L; // 999 MB
    com.facebook.react.modules.storage.ReactDatabaseSupplier.getInstance(getApplicationContext()).setMaximumSize(size);

  }
}
