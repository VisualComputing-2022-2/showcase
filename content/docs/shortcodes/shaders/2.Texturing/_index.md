# Texture Sampling

El modelo de color HSV es una transformación no lineal de color RGB y se usa para progreciones de color

![1](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Cono_de_la_coloraci%C3%B3n_HSV.png/1280px-Cono_de_la_coloraci%C3%B3n_HSV.png)

En la imagen podemos ver el cono del modelo HSV, podemos movernos a través del mismo con un vector de 3 dimensiones de forma:

- 0º = RGB(1, 0, 0)
- 60º = RGB(1, 1, 0)
- 120º = RGB(0, 1, 0)
- 180º = RGB(0, 1, 1)
- 240º = RGB(0, 0, 1)
- 300º = RGB(1, 0, 1)
- 360º = 0º

A continuación se muestra un ejemplo de esto:

{{< hint info >}} **Instrucciones** 
- En el selector, escoja el grado de rotación en el cono del modelo HSV
{{< /hint >}} 

{{< details title="Código (shader):" open=false >}}
```js
precision mediump float;


uniform int selectedTool;
uniform int colorTexture;
uniform sampler2D texture;
uniform vec2 mousePos;


varying vec2 texcoords2;

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec3 ahsv(vec3 c) {
  vec4 K = vec4(1.0, -1.0 / 3.0, 0.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (10.0 * d + e)), d / (q.x + e), q.x);
}

vec3 ahsl(vec3 c) {
  vec3 outputColor = vec3(0.0);

  outputColor.x = c.x;

  outputColor.z = c.z * (1.0 - (c.y / 2.0));

  if(outputColor.z == 0.0 || outputColor.z == 1.0) {
    outputColor.y = 0.0;
  } else {
    outputColor.y = (c.x - outputColor.z) / min(outputColor.z, 1.0 - outputColor.z);
  }
  return outputColor;
}

void main() {
  vec4 texel = texture2D(texture, texcoords2);

  vec4 outputValue;

  if(selectedTool == 0) {
    outputValue = texel;
  } else if(selectedTool == 1) {
    vec3 hsv = ahsv(texel.rgb);
    outputValue = vec4(hsv.rgb, 1.0);
  } else if(selectedTool == 2) {
    vec3 hsv = ahsv(texel.rgb);
    vec3 hsl = ahsl(hsv);
    outputValue = vec4(hsl.rgb, 1.0);
  }

  if(colorTexture == 0) {
    outputValue.rgb = outputValue.rgb * 1.0;
  } else if(colorTexture == 1) {
    outputValue.rgb = outputValue.rgb * vec3(1.0, 0.0, 0.0);
  } else if(colorTexture == 2) {
    outputValue.rgb = outputValue.rgb * vec3(1.0, 1.0, 0.0);
  } else if(colorTexture == 3) {
    outputValue.rgb = outputValue.rgb * vec3(0.0, 1.0, 0.0);
  } else if(colorTexture == 4) {
    outputValue.rgb = outputValue.rgb * vec3(0.0, 1.0, 1.0);
  } else if(colorTexture == 5) {
    outputValue.rgb = outputValue.rgb * vec3(0.0, 0.0, 1.0);
  } else if(colorTexture == 6) {
    outputValue.rgb = outputValue.rgb * vec3(1.0, 0.0, 1.0);
  }

  gl_FragColor = outputValue;
}

```
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/shaders/texture_sampling/hsl1.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="675" height="525" >}}




HSL, tiene dos vertices que representan el blanco y el negro, el ángulo se corresponde con el _Hue_, la distancia con la _Saturation_ y la distancia al eje blanco-negro con el _Lightness_

![2](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Doble_cono_de_la_coloraci%C3%B3n_HSL.png/1280px-Doble_cono_de_la_coloraci%C3%B3n_HSL.png)

transformaciones a *HSV* y *HSL*

{{< hint info >}} **Instrucciones** 
- En el selector, escoja la trasformación HSV, HSL o la imagen original
{{< /hint >}} 

{{< p5-iframe sketch="/showcase/sketches/shaders/texture_sampling/hsl2.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="675" height="525" >}}




