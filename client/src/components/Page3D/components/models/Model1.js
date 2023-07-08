import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model1({ color }) {
  const group = useRef()
  const { nodes, materials } = useGLTF("/models/porshce_911_4S.glb");
  return (
    <group ref={group} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.7}
        >
          <group name="Root">
            <group name="boot">
              <mesh
                name="boot_0"
                castShadow
                receiveShadow
                geometry={nodes.boot_0.geometry}
                // material={materials.full_black}
              />
            </group>
            <group name="boot001">
              <mesh
                name="boot001_0"
                castShadow
                receiveShadow
                geometry={nodes.boot001_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group name="boot002">
              <mesh
                name="boot002_0"
                castShadow
                receiveShadow
                geometry={nodes.boot002_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group name="boot003" position={[0, 0.003, 0]}>
              <mesh
                name="boot003_0"
                castShadow
                receiveShadow
                geometry={nodes.boot003_0.geometry}
                material={materials.tex_shiny}
              />
            </group>
            <group name="boot004">
              <mesh
                name="boot004_0"
                castShadow
                receiveShadow
                geometry={nodes.boot004_0.geometry}
                material={materials.window}
              />
            </group>
            <group name="boot005">
              <mesh
                name="boot005_0"
                castShadow
                receiveShadow
                geometry={nodes.boot005_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group name="boot006">
              <mesh
                name="boot006_0"
                castShadow
                receiveShadow
                geometry={nodes.boot006_0.geometry}
                material={materials.full_black}
              />
            </group>
            <group name="boot007">
              <mesh
                name="boot007_0"
                castShadow
                receiveShadow
                geometry={nodes.boot007_0.geometry}
                material={materials.logo}
              />
            </group>
            <group name="boot008">
              <mesh
                name="boot008_0"
                castShadow
                receiveShadow
                geometry={nodes.boot008_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group name="boot009">
              <mesh
                name="boot009_0"
                castShadow
                receiveShadow
                geometry={nodes.boot009_0.geometry}
                material={materials.silver}
              />
            </group>
            <group name="boot010">
              <mesh
                name="boot010_0"
                castShadow
                receiveShadow
                geometry={nodes.boot010_0.geometry}
                material={materials.plastic}
              />
            </group>
            <group name="boot011">
              <mesh
                name="boot011_0"
                castShadow
                receiveShadow
                geometry={nodes.boot011_0.geometry}
                material={materials.coat}
              />
              <mesh
                name="boot011_0001"
                castShadow
                receiveShadow
                geometry={nodes.boot011_0001.geometry}
                material={materials.coat}
              />
            </group>
            <group name="bumper_front001">
              <mesh
                name="bumper_front001_0"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front001_0.geometry}
                material={materials.plastic}
              />
              <mesh
                name="bumper_front001_1"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front001_1.geometry}
                material={materials.silver}
              />
              <mesh
                name="bumper_front001_2"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front001_2.geometry}
                material={materials.lights}
              />
            </group>
            <group name="bumper_front003">
              <mesh
                name="bumper_front003_0"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front003_0.geometry}
                material={materials.plastic}
              />
              <mesh
                name="bumper_front003_1"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front003_1.geometry}
                material={materials.glass}
              />
            </group>
            <group name="bumper_front004">
              <mesh
                name="bumper_front004_0"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front004_0.geometry}
                material={materials.silver}
              />
              <mesh
                name="bumper_front004_1"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front004_1.geometry}
                material={materials.lights}
              />
              <mesh
                name="bumper_front004_2"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front004_2.geometry}
                material={materials.plastic}
              />
            </group>
            <group
              name="bumper_front007"
              rotation={[-0.006, 0, 0]}
              scale={1.036}
            >
              <mesh
                name="bumper_front007_0"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front007_0.geometry}
                material={materials.glass}
              />
            </group>
            <group name="bumper_front009">
              <mesh
                name="bumper_front009_0"
                castShadow
                receiveShadow
                geometry={nodes.bumper_front009_0.geometry}
                material={materials.tex_shiny}
              />
            </group>
            <group
              name="Cube001"
              position={[0.036, -1.56, 0.333]}
              rotation={[0.709, -0.071, -0.245]}
              scale={[0.014, 0.014, 0.012]}
            >
              <mesh
                name="Cube001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube001_0.geometry}
                material={materials.plastic}
              />
            </group>
            <group name="Cube002" scale={[0.332, 0.318, 0.318]}>
              <mesh
                name="Cube002_0"
                castShadow
                receiveShadow
                geometry={nodes.Cube002_0.geometry}
                material={materials.full_black}
              />
            </group>
            <group name="Cylinder000" position={[0, 0, 0.029]}>
              <mesh
                name="Cylinder000_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_0.geometry}
                material={materials.silver}
              />
              <mesh
                name="Cylinder000_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_1.geometry}
                material={materials.plastic}
              />
              <mesh
                name="Cylinder000_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_2.geometry}
                material={materials.rubber}
              />
              <mesh
                name="Cylinder000_3"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder000_3.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group name="Cylinder001" position={[0, 0, 0.029]}>
              <mesh
                name="Cylinder001_0"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_0.geometry}
                material={materials.silver}
              />
              <mesh
                name="Cylinder001_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_1.geometry}
                material={materials.plastic}
              />
              <mesh
                name="Cylinder001_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_2.geometry}
                material={materials.rubber}
              />
              <mesh
                name="Cylinder001_3"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001_3.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group
              name="Hemi"
              position={[-1.999, -4.412, 4.468]}
              rotation={[0.616, -0.132, -0.007]}
            >
              <group name="Hemi001" />
            </group>
            <group
              name="Hemi002"
              position={[1.427, 0.237, 2.629]}
              rotation={[-2.037, 1.233, 1.189]}
            >
              <group name="Hemi003" />
            </group>
            <group
              name="Plane"
              position={[0, 0, -1.054]}
              scale={[6.953, 9.785, 7.496]}
            />
            <group name="Plane001" position={[0.005, 3.581, 0.107]}>
              <mesh
                name="Plane001_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane001_0.geometry}
                material={materials.tex_shiny}
              />
            </group>
            <group
              name="Plane002"
              position={[-1.053, 3.51, -0.126]}
              rotation={[-1.439, -0.62, 0.776]}
              scale={0.024}
            >
              <mesh
                name="Plane002_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane002_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group
              name="Plane003"
              position={[0.436, 3.723, -0.117]}
              rotation={[-1.483, 0.105, 0.803]}
              scale={0.024}
            >
              <mesh
                name="Plane003_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane003_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group
              name="Plane004"
              position={[-0.488, 3.684, -0.328]}
              rotation={[-1.415, -0.045, 0.802]}
              scale={0.059}
            >
              <mesh
                name="Plane004_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane004_0.geometry}
                // material={materials.paint}
              ><meshStandardMaterial color={color}/> </mesh>
            </group>
            <group
              name="Plane005"
              position={[0, 3.704, -0.292]}
              rotation={[0.114, 0, 0]}
              scale={[0.393, 0.393, 0.356]}
            >
              <mesh
                name="Plane005_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane005_0.geometry}
                material={materials.license}
              />
            </group>
            <group
              name="Plane006"
              position={[0, -3.75, -0.432]}
              rotation={[0.082, 0, -Math.PI]}
              scale={[0.395, 0.395, 0.357]}
            >
              <mesh
                name="Plane006_0"
                castShadow
                receiveShadow
                geometry={nodes.Plane006_0.geometry}
                material={materials.license}
              />
            </group>
            <group name="underbody">
              <mesh
                name="underbody_0"
                castShadow
                receiveShadow
                geometry={nodes.underbody_0.geometry}
                material={materials.full_black}
              />
            </group>
            <group name="window_rear">
              <mesh
                name="window_rear_0"
                castShadow
                receiveShadow
                geometry={nodes.window_rear_0.geometry}
                material={materials.window}
              />
            </group>
            <group name="window_rear001">
              <mesh
                name="window_rear001_0"
                castShadow
                receiveShadow
                geometry={nodes.window_rear001_0.geometry}
                material={materials.full_black}
              />
            </group>
            <group name="windshield" position={[0, -0.003, 0.007]}>
              <mesh
                name="windshield_0"
                castShadow
                receiveShadow
                geometry={nodes.windshield_0.geometry}
                material={materials.window}
              />
              <mesh
                name="windshield_1"
                castShadow
                receiveShadow
                geometry={nodes.windshield_1.geometry}
                material={materials.plastic}
              />
            </group>
          </group>
        </group>
        <group
          name="Light"
          position={[4.076, 5.904, -1.005]}
          rotation={[1.89, 0.881, -2.045]}
        />
        <group
          name="Camera"
          position={[7.359, 4.958, 6.926]}
          rotation={[1.242, 0.33, -0.76]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/porshce_911_4S.glb");
