---
bookCollapseSection: true
---
## Image processing Tool

En esta herramienta se implementaron diferentes matrices de convolucion para poder procesar una imagen y se genero un foco para poder ver donde se aplica en un area determinada por el slider.

{{< hint info >}} **Instrucciones** 
- En el primer seleccionador, escoja el filtro a aplicar
- Escoja foco en la caja de selección si desea aplicar un foco en el filtro.Una vez se aplique el foco, el filtro se aplicará sobre la seccion de la imagen debajo del mouse y no en toda la imagen.
- Utilice el desilizador para amuentar o disminuir el tamaño del foco
{{< /hint >}} 

{{< p5-iframe sketch="/showcase/sketches/shaders/image_processing/imgpr.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="675" height="525" >}}


## Video processing Tool

Gracias al mismo principio se puede usar en videos ya que estos son una serie de imagenes solo se debe aplicar la máscara a cada frame.

{{< hint info >}} **Instrucciones** 
- En el primer seleccionador, escoja el filtro a aplicar
- Escoja foco en la caja de selección si desea aplicar un foco en el filtro.Una vez se aplique el foco, el filtro se aplicará sobre la seccion de la imagen debajo del mouse y no en toda la imagen.
- Utilice el desilizador para amuentar o disminuir el tamaño del foco
{{< /hint >}} 

{{< p5-iframe sketch="/showcase/sketches/shaders/image_processing/vidpr.js" lib1="https://cdn.jsdelivr.net/gh/VisualComputing/p5.treegl/p5.treegl.js" lib2="https://cdn.jsdelivr.net/gh/freshfork/p5.EasyCam@1.2.1/p5.easycam.js" width="675" height="525" >}}