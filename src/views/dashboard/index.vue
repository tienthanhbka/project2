<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Tổng quan</div>
    <div class="dashboard-body">
      <div class="dashboard-body-header">
        Thiết bị
      </div>
      <el-divider></el-divider>
      <div class="dashboard-body-map">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :lg="6">
            <div class="list-device">
              <div
                class="device-item"
                style="background-image: linear-gradient(45deg, #58a6da, #6dd5fa);color:#fff"
              >
                <span>Device #1</span>
                <el-button
                  type="text"
                  size="small"
                  style="float:right;margin:0;padding:0;color:#fff;"
                  >Chi tiết</el-button
                >
              </div>
              <div class="device-item">
                <span>Device #2</span>
                <el-button
                  type="text"
                  size="small"
                  style="float:right;margin:0;padding:0"
                  >Chi tiết</el-button
                >
              </div>
              <div class="device-item">
                <span>Device #3</span>
                <el-button
                  type="text"
                  size="small"
                  style="float:right;margin:0;padding:0"
                  >Chi tiết</el-button
                >
              </div>
              <div class="device-item">
                <span>Device #4</span>
                <el-button
                  type="text"
                  size="small"
                  style="float:right;margin:0;padding:0"
                  >Chi tiết</el-button
                >
              </div>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="18">
            <div class="map">
              <gmap-map :center="center" :zoom="6" class="gg-map">
                <gmap-info-window
                  :options="infoOptions"
                  :position="infoWindowPos"
                  :opened="infoWinOpen"
                  @closeclick="infoWinOpen = false"
                  >{{ infoContent }}</gmap-info-window
                >

                <gmap-marker
                  :icon="
                    m.employee == 'Tôi'
                      ? { url: require('@/assets/marker-blue.png') }
                      : null
                  "
                  @click="clickMarker(m, index)"
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.latLng"
                ></gmap-marker>
              </gmap-map>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <div class="container-chart">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-item">
              <area-chart></area-chart>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-item">
              <area-chart></area-chart>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :lg="8">
            <div class="chart-item">
              <area-chart></area-chart>
            </div>
          </el-col>
        </el-row>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import push from "push.js";
import AreaChart from "./component/AreaChart.vue";
//import ResultChart from "./component/result-chart.vue";
export default {
  name: "GoogleMap",
  components: { AreaChart },
  data() {
    return {
      //mặc định là Montreal
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      infoWindowPos: null,
      infoWinOpen: false,
      infoContent: "",
      center: { lat: 16.5627397, lng: 105.8194112 },
      markers: [],
      places: [{ lat: 45.508, lng: -73.587 }],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
    GetMyLocaion().then(res => {
      var loca = res.Data;
      for (var i in loca) {
        console.log();

        this.markers.push({
          latLng: {
            lat: Number(loca[i].latitudeCheckIn),
            lng: Number(loca[i].longitudeCheckIn)
          },
          employee: loca[i].nameEmployee
        });
      }
      GetLocation().then(res => {
        var loca = res.Data;
        for (var i in loca) {
          console.log();

          this.markers.push({
            latLng: {
              lat: Number(loca[i].latitudeCheckIn),
              lng: Number(loca[i].longitudeCheckIn)
            },
            employee: loca[i].nameEmployee
          });
        }
      });
    });
  },

  methods: {
    clickMarker(marker, idx) {
      this.infoWindowPos = marker.latLng;
      this.infoContent = marker.employee;
      //this.infoContent = '<i>asdfasdfa</i>'
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    generate() {
      const spread = Math.random() + 0.001;

      this.center = { lat: 42.508, lng: -73.587 };

      this.markers = [{ latLng: { lat: 42.508, lng: -73.587 } }];
    },

    // nhận địa điểm thông qua autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
      this.generate();
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 18px;
    line-height: 46px;
  }
  &-body {
    width: 100%;
    height: 500px;
    position: relative;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    &-header {
      font-weight: 700;
      font-size: 10pt;
      color: rgba(24, 14, 14, 0.74);
    }
    &-map {
      width: 100%;
      height: auto;
      margin-bottom: 30px;
      position: relative;
      .list-device {
        width: 100%;
        padding: 5px;
        .device-item {
          font-size: 10pt;
          border-radius: 5px;
          padding: 10px;
          border: 1px solid #eee;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
            rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
      }
      .map {
        width: 100%;
        .gg-map {
          width: 100%;
          height: 400px;
        }
      }
    }
  }
}
.chart-item {
  margin-top: 20px;
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #eee;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}
</style>
