# Shaders

## Color Blending

* ADD:  It produces the new color by adding the colors of both the pixels.
* DIFFERENCE: It subtracts colors from the underlying image.
* DARKEST: It uses only the darker color of the two pixels.
* LIGHTEST: It uses only the lighter color of the two pixels.

{{< details "Shortcuts" >}}
| Shortcut | Description |
| -------- | ----------- |
| R | Red Circle|
| G | Green Circle|
| B | Blue Circle|
| Click | Change Blending |

{{< /details >}}
<center>
{{< p5-iframe sketch="/showcase/sketches/shaders/colorBlending.js" width="425" height="425" >}}
</center>
## Glitch Effect Shader

Basado en el código de [este video](https://youtu.be/r5YkU5Xu4_E)
<br />
<br />La idea del shader es tener un offset para la coordenada en x donde se dibuja el R y el B.
<br />Presione `r` para limpiar el canvas
<center>
{{< p5-iframe sketch="/showcase/sketches/shaders/var_glitched_shader.js" width="650" height="650" >}}
</center>
Si se limita y varía el offset con el tiempo, se tiene el efecto de "glitch"
<br />Presione `r` para limpiar el canvas
<center>
{{< p5-iframe sketch="/showcase/sketches/shaders/glitched_shader.js" width="650" height="650" >}}
</center>

## Ascii Art

Ascii art visual application:

{{< details "Commands" >}}
| Command | Description |
| -------- | ----------- |
| C | Change image |
{{< /details >}}
<center>
{{< p5-iframe sketch="/showcase/sketches/shaders/ascii_art.js" width="430" height="430" >}}
</center>

## Lighting

### Diffuse Reflection
This type of reflection allows objects to be seen in an ideal matte tone. This is thanks to Lambert's law of cosines.
<center><img src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Lambert2.gif" alt="drawing" width="500"/></center>
The concept was introduced in 1760 in the book photometry written by Johann Heinrich Lambert
<center>
{{< p5-iframe sketch="/showcase/sketches/shaders/lighting.js" lib1="https://freshfork.github.io/p5.EasyCam/p5.easycam.js" lib2="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" width="530" height="530" >}}
</center>