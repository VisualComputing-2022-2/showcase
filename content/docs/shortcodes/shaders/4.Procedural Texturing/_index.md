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
{{< p5-iframe sketch="/showcase/sketches/shaders/procedural_texturing/proctex.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="430" height="430">}}

