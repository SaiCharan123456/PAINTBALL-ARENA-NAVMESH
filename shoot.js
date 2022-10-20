AFRAME.registerComponent("bullets", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");

        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: Math.random() * (0.05 - 0.3) + 0.3,
        });

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
        }

        bullet.setAttribute("material", "color", color);

        var cam = document.querySelector("#camera-rig");

        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y + 1.6,
          z: pos.z - 0.08,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        //set the bullet as the dynamic entity
        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "0",
        });

        //add the collide event listener to the bullet
        bullet.addEventListener("collide", this.removeBullet);

        scene.appendChild(bullet);

        //shooting sound
        this.shootSound();
      }
    });
  },
  removeBullet: function (e) {
    //bullet element
    var element = e.detail.target.el;

    //element which is hit
    var elementHit = e.detail.body.el;
    
    //Create paint splash
    var paint = document.createElement("a-entity");
    var pos = element.getAttribute("position")
    var rotate = elementHit.getAttribute("rotation")

    //set the position, rotation, scale
    paint.setAttribute("position", {
      x: pos.x,
      y: pos.y,
      z: pos.z,
    });
    paint.setAttribute("rotation", {
      x: rotate.x,
      y: rotate.y,
      z: rotate.z,
    });
    paint.setAttribute("scale", {
      x: 2,
      y: 2,
      z: 2,
    });

    //choose the paint splash image randomly
    var colorNum = parseInt(Math.random() * 15 + 1)

    paint.setAttribute("material", {
      opacity: 1,
      transparent: true,
      src: "./images/splash" + colorNum + ".png"
    });

    paint.setAttribute("geometry", {
      primitive: "plane",
      width: 0.5,
      height: 0.5
    });
    var scene = document.querySelector("#scene");
    
    scene.appendChild(paint)

     

      //remove event listener
      element.removeEventListener("collide", this.removeBullet);

      //remove the bullets from the scene
      
      scene.removeChild(element);
    
  },
  shootSound: function () {
    var entity = document.querySelector("#sound1");
    entity.components.sound.playSound();
  },
});

