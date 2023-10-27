---
Date: 2023-09-19
---

# Clase 2
Al cargar un js en el head siempre se debe utilizar **defer**. Con esto nos aseguramos que el documento entero carga primero antes de ejecutarse el js.

```html
<script defer type="text/javascript" src="./js/script.js"><script>
``````