
# Image Kernels

## What is a Convolution?

In image processing, convolution is the process of transforming an image by applying a kernel over each pixel and its local neighbors across the entire image. 

The Convolution Process involves those two steps. 

* It places the Kernel Matrix over each pixel of the image, multiplies each value of the Kernel with the corresponding pixel it is over.
* Sums the resulting multiplied values and returns the resulting value as the new value of the center pixel. This process is repeated for each pixel in the image.

## What is a Kernel?

A kernel is in fact a matrix with an M x N dimension that is smaller than the image matrix. The kernel is also known as the convolution matrix and it's used for the tasks like blurring, sharpening, edge-detection and similar image processing tasks.

### Kernels Used in this Example:


1. __The Prewitt Operator:__
    Can be used for both vertical and horizontal edge detection.
    * Vertical 
        {{< katex >}}
        \begin{bmatrix}
        1 & 0 & -1\\
        1 & 0 & -1\\
        1 & 0 & -1
        \end{bmatrix}
        {{< /katex >}}
    * Horizontal 
        {{< katex >}}
        \begin{bmatrix}
        1 & 1 & 1\\
        0 & 0 & 0\\
        -1 & -1 & -1
        \end{bmatrix}
        {{< /katex >}}

2. __The Sobel Operator:__ The Sobel operator emphasizes the edges more than the Prewitt operator by replacing 1’s in the central column with 2’s.
    * Vertical 
        {{< katex >}}
        \begin{bmatrix}
        1 & 0 & -1\\
        2 & 0 & -2\\
        1 & 0 & -1
        \end{bmatrix}
        {{< /katex >}}
    * Horizontal 
        {{< katex >}}
        \begin{bmatrix}
        1 & 2 & 1\\
        0 & 0 & 0\\
        -1 & -2 & -1
        \end{bmatrix}
        {{< /katex >}}
3. __Box:__ The box kernel is a simple filter that calculates the mean of the pixels in the area covered by the filter. This also has a smoothing effect.  
    {{< katex >}}
    \frac{1}{9} 
    \begin{bmatrix}
    1 & 1 & 1\\
    1 & 1 & 1\\
    1 & 1 & 1
    \end{bmatrix}
    {{< /katex >}}

4. __Gaussian:__ The Gaussian kernel is a filter that calculates the weighted mean of the pixels in the area covered by the filter, it's used to blur an image.  
    {{< katex >}}
    \frac{1}{16}
    \begin{bmatrix}
    1 & 2 & 1\\
    2 & 4 & 2\\
    1 & 2 & 1
    \end{bmatrix}
    {{< /katex >}}

5. __Sharpen:__ The sharpen kernel is a filter thah emphasizes differences in adjacent pixel values. This makes the image look more vivid.  
    {{< katex >}}
    \begin{bmatrix}
    0 & -1 & 0\\
    -1 & 5 & -1\\
    0 & -1 & 0
    \end{bmatrix}
    {{< /katex >}}

{{< details "Shortcuts" >}}
| Shortcut | Description |
| -------- | ----------- |
| V | Vertical Edge|
| H | Horizontal Edge|
| E | Edge Kernel |
| B | Box Kernel |
| S | Sharpen Kernel |
| G | Gaussian Kernel |
| Z | Sobel Kernel |
| F | Reset Image |
| C | + Brightness |
| D | - Brightness |
{{< /details >}}

{{< p5-iframe sketch="/showcase/sketches/visualMasking.js" width="612" height="925" >}}

## About the histogram

As you can see, as the different filters (kernels) area applied, the color composition of the image changes as well. This is also true for changes in the brightness.

The histogram shows the frequency of the colors in the image. Note that as the image gets darker, we get more colors at the left of the diagram, and as the image gets brighter, we get more colors at the right.


