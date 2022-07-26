package com.newsapp; //change your package name
import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
public class SplashActivity extends AppCompatActivity {
     @Override
     protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(savedInstanceState);
         Intent Intent = new Intent(this, MainActivity.class);
         startActivity(Intent);
         finish();
     }
}