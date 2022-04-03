var viewer = new Cesium.Viewer("cesiumContainer", {
    timeline: false,
    animation: false,
});
var scene = viewer.scene;
var primitives = scene.primitives;

//enable lighting
var globe = scene.globe;
globe.enableLighting = true;


viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(20.225556, 12.288889, 35000000.0),
    orientation: {
        heading: Cesium.Math.toRadians(0.0),
        pitch: Cesium.Math.toRadians(-90.0),
        roll: 0.0,
    },
});


// adding placemark: KENNEDY SPACE CENTER
var instance0 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-80.651070, 28.573469),
        radius: 50000.0
    }),
    id: 'KSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }

});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance0,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: JIUQUAN SPACE CENTER
var instance1 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(100.17, 40.57),
        radius: 50000.0
    }),
    id: 'JSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance1,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: VANDENBERG AIR FORCE BASE
var instance2 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-120.572831042, 34.724497102),
        radius: 50000.0
    }),
    id: 'VAFB',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance2,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: TAIYUAN SPACE CENTER
var instance3 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(111.605095913, 38.8427816289),
        radius: 50000.0
    }),
    id: 'TSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance3,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: XICHANG SPACE CENTER
var instance4 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(102.02259991, 28.2409423696),
        radius: 50000.0
    }),
    id: 'XSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance4,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: WENCHANG SPACE CENTER
var instance5 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(110.963, 19.652),
        radius: 50000.0
    }),
    id: 'WSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance5,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: EDWARDS AIR FORCE BASE
var instance6 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-117.883496466, 34.90332972),
        radius: 50000.0
    }),
    id: 'EAFB',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance6,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: WALLOPS ISLAND
var instance7 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-75.4666648, 37.8499966),
        radius: 50000.0
    }),
    id: 'WI',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance7,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: KOUROU
var instance8 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-52.650299, 5.159700),
        radius: 50000.0
    }),
    id: 'K',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance8,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: ALCANTARA
var instance9 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-44.391165102, -2.370498518),
        radius: 50000.0
    }),
    id: 'A',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance9,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: HAMMAGUIR
var instance10 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(3.314, 30.4641),
        radius: 50000.0
    }),
    id: 'H',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance10,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: TORREJON AIR BASE
var instance11 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-3.44083157, 40.491331368),
        radius: 50000.0
    }),
    id: 'TAB',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance11,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: LUIGI BROGLIO SPACE CENTER
var instance12 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(40.20749917, -2.936329588),
        radius: 50000.0
    }),
    id: 'LBSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance12,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));



//adding placemark: GAGARIN'S START
var instance14 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(63.342222, 45.920278),
        radius: 50000.0
    }),
    id: 'GS',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance14,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: Tanegashima Space Center
var instance15 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(130.968662792, 30.3999984),
        radius: 50000.0
    }),
    id: 'TTSC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance15,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: KODIAC LAUNCH COMPLEX
var instance16 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(-152.337778, 57.435833),
        radius: 50000.0
    }),
    id: 'KLC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance16,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


//adding placemark: arnhem space centre
var instance16 = new Cesium.GeometryInstance({
    geometry: new Cesium.CircleGeometry({
        center: Cesium.Cartesian3.fromDegrees(136.39, -12.39),
        radius: 50000.0
    }),
    id: 'ASC',
    attributes: {
        color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.RED)
    }
});

scene.primitives.add(new Cesium.Primitive({
    geometryInstances: instance16,
    appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        translucent: false
    })
}));


var handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);

handler.setInputAction(function(movement) {
    var pick = scene.pick(movement.position);
    if (Cesium.defined(pick) && (pick.id === 'KSC')) {
        document.getElementById('KSC').style.opacity = 1;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'JSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 1;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'VAFB')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 1;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'TSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 1;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'XSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 1;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'WSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 1;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'EAFB')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 1;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'WI')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 1;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'K')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 1;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'A')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 1;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'H')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 1;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'TAB')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 1;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'LBSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 1;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'GS')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 1;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'TTSC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 1;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'KLC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 1;
        document.getElementById('ASC').style.opacity = 0;
    } else if (Cesium.defined(pick) && (pick.id === 'ASC')) {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 1;
    } else {
        document.getElementById('KSC').style.opacity = 0;
        document.getElementById('JSC').style.opacity = 0;
        document.getElementById('VAFB').style.opacity = 0;
        document.getElementById('TSC').style.opacity = 0;
        document.getElementById('XSC').style.opacity = 0;
        document.getElementById('WSC').style.opacity = 0;
        document.getElementById('EAFB').style.opacity = 0;
        document.getElementById('WI').style.opacity = 0;
        document.getElementById('K').style.opacity = 0;
        document.getElementById('A').style.opacity = 0;
        document.getElementById('H').style.opacity = 0;
        document.getElementById('TAB').style.opacity = 0;
        document.getElementById('LBSC').style.opacity = 0;
        document.getElementById('GS').style.opacity = 0;
        document.getElementById('TTSC').style.opacity = 0;
        document.getElementById('KLC').style.opacity = 0;
        document.getElementById('ASC').style.opacity = 0;
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);