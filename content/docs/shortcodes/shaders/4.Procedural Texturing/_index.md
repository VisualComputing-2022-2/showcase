# Procedural texturing

Se crean las texturas mediante un fragment shader el cual recibe la información pixel a pixel, y de acuerdo a sus coordenadas ST se mapea un color sobre la figura seleccionada.
además se modifican las coordenadas de cada pixel de manera que se devuelva su parte fraccional 

![](https://www.scratchapixel.com/images/upload/shading-intro/shad-fmod.png?)

{{< katex display >}}  f(x) = x - floor(x) {{< /katex >}} 

Esta función es luego usada para asignar el color de cada pixel sobre la figura:

```javascript
st = tile(st,u_zoom*0.5);
gl_FragColor = vec4(vec3(step(st.x,st.y)),1.0);
```
Este es el proceso mediante el cual se generan texturas procedimentales. Para crear nuevas texturas se pueden utilizar nuevas funciones matemáticas. A continuación, se muestran varios ejempos de texturas procedimentales sobre varias figuras.

{{< hint info >}} **Instrucciones** 
- En el primer selector, selecciona la figura sobre la cual aplicar la textura
- En el segundo slector, selecciona la textura a aplicar
- Mueve el mouse para cambiar el tamaño de la textura
- Control de la camara mediante EasyCam
{{< /hint >}} 

{{< details title="Código de la textura brick (shader):" open=false >}}
```js
// Author @patriciogv ( patriciogonzalezvivo.com ) - 2015

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform float u_zoom;

vec2 brickTile(vec2 _st, float _zoom){
    _st *= _zoom;

    // Here is where the offset is happening
    _st.x += step(1., mod(_st.y,2.0)) * 0.5;

    return fract(_st);
}

float box(vec2 _st, vec2 _size){
    _size = vec2(0.5)-_size*0.5;
    vec2 uv = smoothstep(_size,_size+vec2(1e-4),_st);
    uv *= smoothstep(_size,_size+vec2(1e-4),vec2(1.0)-_st);
    return uv.x*uv.y;
}

void main(void){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    // Modern metric brick of 215mm x 102.5mm x 65mm
    // http://www.jaharrison.me.uk/Brickwork/Sizes.html
    // st /= vec2(2.15,0.65)/1.5;

    // Apply the brick tiling
    st = brickTile(st,u_zoom*0.5);

    color = vec3(box(st,vec2(0.9)));

    // Uncomment to see the space coordinates
    // color = vec3(st,0.0);

    gl_FragColor = vec4(color,1.0);
}

```
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/shaders/procedural_texturing/proctex.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="430" height="430">}}

