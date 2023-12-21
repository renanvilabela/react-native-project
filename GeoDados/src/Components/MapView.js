import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

class MapViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0, // latitude inicial
        longitude: 0, // longitude inicial
        latitudeDelta: 0.01, // ajuste de zoom inicial
        longitudeDelta: 0.01, // ajuste de zoom inicial
      },
    };
  }

  componentDidMount() {
    // Aqui você pode usar a API de geolocalização para obter a localização atual do usuário
    // e atualizar a posição do marcador no mapa.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          },
        });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
        >
          <Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            title="Sua Localização"
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapViewComponent;