## Magnifier Tool

Esta apliación permite utilizar un fragment shader para amplificar el tamaño de la imagen  y de un video alreder de un foco.

{{< hint info >}} **Instrucciones**
- Escoja `video` o `imagen`en la caja de selección
- Utilice el desilizador para amuentar o disminuir el tamaño del foco
{{< /hint >}} 

{{< details title="Código (shader):" open=false >}}
```js
#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D texture;
uniform vec2 texOffset;
// holds the 3x3 kernel
uniform float mask[9];
uniform vec2 u_mouse;
uniform vec2 u_resolution;
uniform int option;
uniform bool region;
uniform float radio;

// we need our interpolated tex coord
varying vec2 texcoords2;

void main() {
    vec2 xy = gl_FragCoord.xy - u_mouse.xy;
    float R = radio;
    float h = 40.;
    float hr = R * sqrt(1. - ((R - h) / R) * ((R - h) / R));
    float r = sqrt((xy.x * xy.x) + (xy.y * xy.y));
    vec2 new_xy = r < hr ? xy * (R - h) / sqrt(R * R + r * r) : xy;
    gl_FragColor = texture2D(texture, (new_xy.xy + u_mouse.xy) / u_resolution.xy);
}

```
{{< /details >}}


{{< p5-iframe sketch="/showcase/sketches/shaders/image_processing/magnifier.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="675" height="525" >}}