---
title: css script
layout: plain.html
description: the script i made for my CSS workshop on october 2025, it's all written in spanish.
date-published: 01.nov.25
---

## introducción

1. instrucciones
   - pueden usar editores online
2. CAMBIOS al HTML original
   - sacar el `h1` del header
   - wrap el contenido en `main`
3. explicar por encima datos del taller HTML:
   - definiciones: HTML, **CSS**, JS
4. crear documento `style.css`
   - se le añade un color background a `body`
   - explicar términos y sintaxis: _css block_, _property_, _value_, _selector_
5. añadirlo al HTML `<link rel="stylesheet" href="awesome.css">`
6. explicar _inline_ vs _internal_ vs _external_

## CSS

1.  **background** - `body`

- explicar el uso de `background` shorthand vs usar todas las propiedades

```CSS
body{
  background-color:brown;
  background-image: url(assets/bg.png), url(assets/pattern.gif);
  background-repeat: no-repeat, repeat;
  background-size: cover, auto;
  background-attachment: fixed;
  background-blend-mode: overlay;
}
```

2.  **box-model - (`header, main, footer`)**

- se añade un `border` y un `max-width` (se explica pq es mejor que just width)
- introducir **inspector**
- `box model` : _padding_, _margin_
- si le di un width de x pixeles, de donde vienen esos pixeles extra??
  - _centralizar los elementos_
    - `margin: auto`
    - explicar maneras de como ponerle valores a propiedades como `margin` y `width`
    - de una vez centralizar el `h1` con `text-align`

```CSS
	header, main, footer {
	border-radius:10px;
	max-width: 700px;
	margin: 20px auto;
	padding: 20px;
	border: 2px dashed var(--red);
	overflow: auto;
	}
```

3. **position** - los diferentes positions que puede tener un elemento: relative, absolute, fixed, sticky con `h1`

4. **font color**
   - se le añade `color` al body font.
   - pero yo no quiero repetir valores!!!! se introduce el pseudo-clase de `:root` , _variables globales_ , y la función de `var()`

```CSS
:root{
  --dark: #481c31;
  --light: #f9e8cf;
  --peach: #d1a99a;
  --red: #8e2335;
  --green: #4d4828;
  }
```

4. **font family**
   - cambiar font: _font-family_
     - introducir que no todos los fonts son compatibles con todos los dispositivos / OS : _ms pgothic_, por eso de fallback tenemos a _arial_
   - añadimos nuestros fonts con `@font-face`
     - mostrar que pasa si _blotter_ de momento no funciona en h1, por eso es bueno tener nuestros fonts en una variable
   - se muestra que podemos cambiar el estilo de un font utilizando _font-style_ y _font-weight_ **cambiamos al elemento dt**

```CSS
@font-face {
  font-family: romance;
  src: url(fonts/RomanceA.ttf);
}

@font-face {
  font-family: blotter;
  src: url(fonts/blotter.otf);
}

h1,
h2,
h3,
h4 {
  font-family: blotter, var(--fonts);
}
```

6. **a/link - pseudo-classes: :hover**
   - se le pone un mejor color
   - introducimos _nested CSS_ con `:hover`

```CSS
a {
  color: var(--dark);
  &:hover {
    text-decoration: line-through;
  }
}
```

7. **pseudo-classes :nth-of-type, :first-of-type, .classes (a)**

```CSS
table {
  tr {
     &:nth-of-type(2n) {
      background: var(--peach);
      color: var(--green);
    }
    &:nth-of-type(2n+1) {
      background: var(--peach);
      color: var(--red);
    }
    &:first-of-type {
      background: var(--green);
      color: var(--light);
    }
    &.info {
      background: var(--red);
      color: var(--light);
    }
  }
}
```

6. **pseudo-elements ::marker - (details)**
   - enseñar el `::marker` del `summary` mediante el _inspector_
   - cambiar el `::marker` original y cuando habre!
   - también se puede cambiar el `::marker` de las listas!

```CSS
details {
  cursor: help;
  summary::marker {
    content: "~";
  }
 
  &[open] summary::marker {
    content: "+";
  }
}
```

7. **pseudo-elements ::before, ::after - (h1)**
   - _content_ tambien se puede utilizar con imgs utilizando _url()_!
   - y presentamos como le podemos añadirle _shadow_ al texto con _text-shadow_
   - pero yo tambien quiero que los gatitos tengan un shadow!!!!!

```CSS
h1 {
  text-align: center;
  text-shadow: -1.5px -1.5px 1px white, 1.5px 1.5px 1px white;
  filter: drop-shadow(5px 5px 1px rgb(37, 22, 22));

  &::before {
    content: url(assets/left-cat.gif);
    padding-right: 10px;
  }
  &::after {
    content: url(assets/right-cat.gif);
    padding-left: 10px;
  }
}
```

8. **box-shadow - (header, main, footer)**
   - hablando de shadows.... se introduce el _box-shadow_

```CSS
header, main, footer{
  box-shadow: inset 5px 5px 5px var(--peach), inset -5px -5px 5px var(--peach);
}
```

9. **layouts - # ID, grid layout**
   - lo único que nos falta es que nuestra página tenga un layout!
   - mencionar a _flex_, but fuck _flex_ vamos a estar usando _grid_
   - para eso necesitamos editar el html para crear un _div#wrapper_!
   - --- se le quita el max-width a los boxes

```CSS
#wrapper {
  display: grid;
  margin: auto;
  grid-template-areas:
    "h1 h1"
    "header main"
    "footer footer";
  grid-template-columns: 1fr 2fr;
  max-width: 900px;
  gap: 20px;
}
```

10. **responsive - @media rule**

- this looks so ugly si se fuera a ver en un celular though....
- para eso está el _@media rule_
- se cambia a que el wrapper tenga un display de `block` y le ponemos detalles

```CSS
@media screen and (max-width: 500px) {
  #wrapper {
    display: block;
    gap: 0;
  }

  header,
  main,
  footer {
    margin: 20px 10px;
  }
}
```

### extra

- `@keyframes`
- center something vertically
- `@import` rule
