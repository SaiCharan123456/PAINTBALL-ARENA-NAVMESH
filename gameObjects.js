/*AFRAME.registerComponent("wire-fence", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var wireFence1 = document.createElement("a-entity");
      var wireFence2 = document.createElement("a-entity");
      var wireFence3 = document.createElement("a-entity");
      var wireFence4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      wireFence1.setAttribute("id", "wireFence1" + i);
      wireFence2.setAttribute("id", "wireFence2" + i);
      wireFence3.setAttribute("id", "wireFence3" + i);
      wireFence4.setAttribute("id", "wireFence4" + i);

      //set the position
      wireFence1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      wireFence2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      wireFence3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      wireFence4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      wireFence1.setAttribute("scale", scale);
      wireFence2.setAttribute("scale", scale);
      wireFence3.setAttribute("scale", scale);
      wireFence4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/barbed_wire_fence/scene.gltf"
      );

      //set the rotation
      wireFence3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      wireFence4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      wireFence1.setAttribute("static-body", {});
      wireFence2.setAttribute("static-body", {});
      wireFence3.setAttribute("static-body", {});
      wireFence4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(wireFence1);
      sceneEl.appendChild(wireFence2);
      sceneEl.appendChild(wireFence3);
      sceneEl.appendChild(wireFence4);

    }
  },
});*/

//boxes
//UPDATE the component code here
AFRAME.registerComponent("boxes", {
  schema: {
    height: { type: "number", default: 3 },
    width: { type: "number", default: 3 },
    depth: { type: "number", default: 3 },
  },
  init: function () {
    var color1 = []
    for(var j = 0; j < 10; j++){      
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      color1.push(color)
    }

    var colors = []
    for(var j = 0; j < 10; j++){      
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      colors.push(color)
    }
    posX = -24  
    posX1 = -24 
    posZ = -30
    //keep the loop counter very less if the scene is not loading
    for (var i = 0; i < 20; i++) {
      var box = document.createElement("a-entity");
      var box1 = document.createElement("a-entity");
      box1.setAttribute("id", "box1" + i); 
      box.setAttribute("id", "box" + i); 

     if(box1.id.includes("box1")){
        box1.setAttribute("material","color", colors[i] )
     }

     if(box.id.includes("box")){
        box.setAttribute("material","color", color1[i] )
     }

      

      //set position attribute
      posX = posX + 4
      posY = 1.5;
      posZ = posX + 5

      posX1 = posX1 + 5
      posY1 = 1.5;
      posZ1 = 0

      box.setAttribute("position",{x:posX,y:posY,z:posZ});
      box1.setAttribute("position",{x:posX1,y:posY1,z:posZ1});

      box1.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set geometry attribute

      box.setAttribute("geometry",{
        primitive: "box",
        height: 5,
        width: 5 ,
        depth:0.1
      })      

      box1.setAttribute("geometry",{
        primitive: "box",
        height: 5,
        width: 5 ,
        depth:0.1
      })      

      //set material attribute
      
      box1.setAttribute("static-body",{})    

      // set static-body attribute

      box.setAttribute("static-body",{})     

      //append the box to the scene
      scene = document.querySelector("#scene");
      //attach the entity to the scene
      scene.appendChild(box);
      scene.appendChild(box1);
        
    }
  },
});


