// ==========================================================================
// 1. BASE DE DATOS DEL MUNDO (Ajustada a tus tarjetas HTML)
// ==========================================================================
function crearPlantillaGenerica(totalJugadores) {
    let posicionesBase = ["POR", "DEF", "DEF", "DEF", "DEF", "MED", "MED", "MED", "DEL", "DEL"];
    let plantilla = [];

    for (let i = 1; i <= totalJugadores; i++) {
        let posicion = posicionesBase[(i - 1) % posicionesBase.length];
        plantilla.push({
            nombre: "Jugador " + i,
            posicion: posicion,
            nacionalidad: "🌍",
            edad: 18 + (i % 16),
            valor: (0.5 + (i * 0.35)).toFixed(2) + "M",
            salario: (20 + i * 2) + "K",
            poder: 55 + (i % 36),
            pierna: i % 3 === 0 ? "I" : "D",
            rating: 55 + (i % 36)
        });
    }

    return plantilla;
}


function crearEquipo(nombre, logo, jugadores, valoracion, dataFile) {
    return {
        id: nombre.toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/_$/, ""),
        nombre: nombre,
        logo: logo,
        jugadores: jugadores,
        valoracion: valoracion,
        dataFile: dataFile || null,
        plantilla: null
    };
}

function cargarPlantillaEquipo(equipo, callback) {
    if (!equipo) {
        if (callback) callback(null);
        return;
    }

    if (equipo.plantilla && equipo.plantilla.length > 0) {
        if (callback) callback(equipo.plantilla);
        return;
    }

    var archivo = equipo.dataFile || ("data/" + equipo.id + ".json");
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", archivo, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                try {
                    var data = JSON.parse(xhr.responseText);
                    equipo.plantilla = data;
                    if (callback) callback(data);
                } catch (e) {
                    console.warn("Error parseando JSON de " + equipo.nombre + ", usando plantilla genérica.", e);
                    equipo.plantilla = crearPlantillaGenerica(equipo.jugadores || 22);
                    if (callback) callback(equipo.plantilla);
                }
            } else {
                console.warn("No se pudo cargar " + archivo + " (status " + xhr.status + "), usando plantilla genérica.");
                equipo.plantilla = crearPlantillaGenerica(equipo.jugadores || 22);
                if (callback) callback(equipo.plantilla);
            }
        }
    };
    xhr.onerror = function () {
        console.warn("Error de red al cargar " + archivo + ", usando plantilla genérica.");
        equipo.plantilla = crearPlantillaGenerica(equipo.jugadores || 22);
        if (callback) callback(equipo.plantilla);
    };
    xhr.send();
}

function cargarYMostrarOficina(equipo) {
    if (!equipo) return;
    if (!window.entrenadorUsuario) window.entrenadorUsuario = "Tú";
    cargarPlantillaEquipo(equipo, function (plantilla) {
        plantillaActual = plantilla || crearPlantillaGenerica(equipo.jugadores || 22);
        generarCalendarioCompleto();
        generarPlantillasIniciales();
        inicializarStaminaGlobal();
        renderizarOficina();
        inicializarClasificacion();
        mostrarPantalla("pantalla-oficina");
    });
}

function inicializarStaminaGlobal() {
    function init(j) { if (j.stamina === undefined || j.stamina === null) j.stamina = 100; }
    plantillaActual.forEach(init);
    for (var eq in mercadoTodasLasPlantillas) {
        (mercadoTodasLasPlantillas[eq] || []).forEach(init);
    }
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        var club = laLigaClasificacion[i];
        if (club.jugadores) club.jugadores.forEach(init);
    }
}

function abrirModalPlantilla(equipo) {
    if (!equipo) return;
    var modal = document.getElementById("modal-plantilla");
    var titulo = document.getElementById("modal-titulo-equipo");
    var contenedor = document.getElementById("lista-plantilla-body");
    if (!modal || !titulo || !contenedor) return;

    titulo.innerText = "Plantilla del " + equipo.nombre;

    cargarPlantillaEquipo(equipo, function (plantilla) {
        var datos = plantilla || crearPlantillaGenerica(equipo.jugadores || 22);
        contenedor.innerHTML = "";

        datos.forEach(function (j) {
            var item = document.createElement("div");
            item.className = "fila-jugador";

            var bloquePosicion = document.createElement("div");
            bloquePosicion.className = "bloque-posicion-oficina";

            var posicionJugador = document.createElement("span");
            var posOriginal = (j.posicion || "").toUpperCase();
            var textoPosicion = "N/A";
            var colorClase = "pos-desconocido";

            if (posOriginal === "POR" || posOriginal === "PO") {
                textoPosicion = "PO"; colorClase = "pos-portero";
            } else if (["DFC","LD","LI","CAD","CAI","DF","DEF"].indexOf(posOriginal) >= 0 || posOriginal.includes("DEF") || posOriginal.includes("LAT")) {
                textoPosicion = "DF";
                if (posOriginal === "DFC" || posOriginal.includes("CENTRAL")) textoPosicion = "DFC";
                if (posOriginal === "LD") textoPosicion = "LD";
                if (posOriginal === "LI") textoPosicion = "LI";
                if (posOriginal.includes("CARRIL")) textoPosicion = "CR";
                colorClase = "pos-defensa";
            } else if (["MC","MCD","MCO","MI","MD","MED"].indexOf(posOriginal) >= 0 || posOriginal.includes("MED") || posOriginal.includes("CENTRO")) {
                textoPosicion = "MC";
                if (posOriginal === "MCD" || posOriginal.includes("DEFENSIVO")) textoPosicion = "MCD";
                if (posOriginal === "MCO" || posOriginal.includes("OFENSIVO")) textoPosicion = "MCO";
                if (posOriginal === "MI" || posOriginal.includes("IZQUIERDO")) textoPosicion = "MI";
                if (posOriginal === "MD" || posOriginal.includes("DERECHO")) textoPosicion = "MD";
                colorClase = "pos-mediocentro";
            } else if (["DC","ED","EI","DEL"].indexOf(posOriginal) >= 0 || posOriginal.includes("DEL") || posOriginal.includes("EXTREMO")) {
                textoPosicion = "DC";
                if (posOriginal === "EI" || posOriginal.includes("EXTREMO IZQUIERDO")) textoPosicion = "EI";
                if (posOriginal === "ED" || posOriginal.includes("EXTREMO DERECHO")) textoPosicion = "ED";
                colorClase = "pos-delantero";
            }

            posicionJugador.className = "posicion-jugador " + colorClase;
            posicionJugador.innerText = textoPosicion;

            var pieJugador = document.createElement("span");
            pieJugador.className = "pie-jugador-bajo-posicion";
            var piernaOriginal = (j.pierna || "").toLowerCase();
            var textoPie = "-";
            if (piernaOriginal.includes("der") || piernaOriginal === "d") textoPie = "der";
            else if (piernaOriginal.includes("izq") || piernaOriginal === "i") textoPie = "izq";
            else if (piernaOriginal.includes("amb") || piernaOriginal === "a") textoPie = "amb";
            pieJugador.innerText = textoPie;

            bloquePosicion.appendChild(posicionJugador);
            bloquePosicion.appendChild(pieJugador);

            var nacionalidadJugador = document.createElement("span");
            nacionalidadJugador.className = "nacionalidad-jugador-oficina";
            nacionalidadJugador.innerText = j.nacionalidad || "🌍";

            var nombreJugador = document.createElement("span");
            nombreJugador.className = "nombre-jugador-oficina";
            var textoNombreJugador = document.createElement("span");
            textoNombreJugador.className = "nombre-jugador-texto";
            textoNombreJugador.innerText = j.nombre;
            nombreJugador.appendChild(textoNombreJugador);

            var edadJugador = document.createElement("span");
            edadJugador.className = "edad-jugador-oficina";
            edadJugador.innerText = j.edad != null ? String(j.edad) : "-";

            var valorJugador = document.createElement("span");
            valorJugador.className = "valor-jugador-oficina";
            valorJugador.innerText = j.valor || "-";

            var poderJugador = document.createElement("span");
            poderJugador.className = "poder-jugador-oficina";
            poderJugador.innerText = (typeof j.rating === "number") ? String(j.rating) : (typeof j.poder === "number" ? String(j.poder) : "-");

            item.appendChild(bloquePosicion);
            item.appendChild(nacionalidadJugador);
            item.appendChild(nombreJugador);
            item.appendChild(edadJugador);
            item.appendChild(valorJugador);
            item.appendChild(poderJugador);

            contenedor.appendChild(item);
        });

        modal.classList.add("modal-visible");
    });
}

function cerrarModalPlantilla() {
    var modal = document.getElementById("modal-plantilla");
    if (modal) modal.classList.remove("modal-visible");
}

// Helper: parse value string like "65.6M" or "134K" to number
function parseValor(valorStr) {
    if (!valorStr) return 0;
    var s = String(valorStr).replace(/[^0-9.,]/g, "").replace(",", ".");
    var n = parseFloat(s) || 0;
    if (String(valorStr).indexOf("M") >= 0) n *= 1000000;
    else if (String(valorStr).indexOf("K") >= 0) n *= 1000;
    return n;
}

function cerrarModalNegociacion() {
    var modal = document.getElementById("modal-negociacion");
    if (modal) modal.classList.remove("activo");
}

function abrirNegociacionFichaje(jugador) {
    if (!jugador) return;
    var modal = document.getElementById("modal-negociacion");
    var titulo = document.getElementById("neg-titulo");
    var contenido = document.getElementById("neg-contenido");
    var boton = document.getElementById("neg-boton-accion");
    if (!modal || !titulo || !contenido || !boton) return;

    titulo.innerText = "💵 Fichaje: " + jugador.nombre;
    var valorNumerico = parseValor(jugador.valor);
    var presupuestoDisp = presupuestoFichajes;

    contenido.innerHTML =
        '<div class="neg-info">Valor de mercado: <strong>' + (jugador.valor || "?") + '</strong></div>' +
        '<div class="neg-info">Presupuesto disponible: <strong>' + presupuestoDisp.toLocaleString("es-ES") + '€</strong></div>' +
        '<div class="neg-input-group">' +
            '<label for="neg-input-oferta">Tu oferta (€)</label>' +
            '<input type="number" id="neg-input-oferta" class="neg-input" min="0" step="100000" value="' + Math.round(valorNumerico * 0.7) + '">' +
        '</div>' +
        '<div class="neg-resultado" id="neg-resultado" style="display:none"></div>' +
        '<div class="neg-botones" id="neg-botones"></div>';

    boton.style.display = "none";

    var botonesDiv = document.getElementById("neg-botones");
    botonesDiv.innerHTML =
        '<button class="neg-btn-aceptar" onclick="enviarOfertaFichaje(window.jugadorMercadoActual)">Enviar oferta</button>' +
        '<button class="neg-btn-rechazar" onclick="cerrarModalNegociacion()">Cancelar</button>';

    modal.classList.add("activo");
}

function enviarOfertaFichaje(jugador) {
    if (!jugador) return;
    var input = document.getElementById("neg-input-oferta");
    if (!input) return;
    var monto = parseInt(input.value) || 0;
    var valorNumerico = parseValor(jugador.valor);
    var resultadoDiv = document.getElementById("neg-resultado");
    var botonesDiv = document.getElementById("neg-botones");

    if (monto <= 0) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "Introduce una oferta válida.";
        return;
    }

    if (monto > presupuestoFichajes) {
        resultadoDiv.style.display = "block";
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "No tienes suficiente presupuesto. Dispones de " + presupuestoFichajes.toLocaleString("es-ES") + "€.";
        return;
    }

    var ratio = monto / valorNumerico;
    var random = Math.random();

    // Decision logic
    var acepta = false, contraoferta = false;

    if (ratio >= 0.8) {
        acepta = random < 0.7;
        contraoferta = !acepta;
    } else if (ratio >= 0.5) {
        acepta = random < 0.4;
        contraoferta = !acepta && random < 0.7;
    } else {
        acepta = random < 0.1;
        contraoferta = !acepta && random < 0.3;
    }

    resultadoDiv.style.display = "block";

    if (acepta) {
        var jugadorMercadoEquipo = window.jugadorMercadoEquipo;
        presupuestoFichajes -= monto;
        var registro = "Fichaje de " + jugador.nombre + ": -" + monto.toLocaleString("es-ES") + "€";
        historialEconomia.unshift(registro);

        // Remove from source
        var src = mercadoTodasLasPlantillas[jugadorMercadoEquipo];
        if (src) {
            for (var i = 0; i < src.length; i++) {
                if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                    src.splice(i, 1);
                    break;
                }
            }
        }
        // Add to user
        plantillaActual.push(jugador);
        renderizarOficina();

        resultadoDiv.className = "neg-resultado exito";
        resultadoDiv.innerText = "¡Fichaje completado! " + jugador.nombre + " se une a tu club por " + monto.toLocaleString("es-ES") + "€.";

        botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
        window.jugadorMercadoActual = null;
        return;
    }

    if (contraoferta) {
        var montoContra = Math.round(monto * 1.2);
        if (montoContra > presupuestoFichajes) {
            resultadoDiv.className = "neg-resultado rechazo";
            resultadoDiv.innerText = "El club pide " + montoContra.toLocaleString("es-ES") + "€, pero no tienes suficiente presupuesto.";
            botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
            return;
        }
        resultadoDiv.className = "neg-resultado contraoferta";
        resultadoDiv.innerHTML = 'El club rechaza tu oferta.<br>El club pide <strong>' + montoContra.toLocaleString("es-ES") + '€</strong>.<br>¿Aceptas la contraoferta?';

        botonesDiv.innerHTML =
            '<button class="neg-btn-aceptar" onclick="aceptarContraoferta(' + montoContra + ', window.jugadorMercadoActual, \'' + (window.jugadorMercadoEquipo || "") + '\')">Aceptar</button>' +
            '<button class="neg-btn-rechazar" onclick="cerrarModalNegociacion()">Rechazar</button>';
        return;
    }

    resultadoDiv.className = "neg-resultado rechazo";
    resultadoDiv.innerText = "El club ha rechazado tu oferta. Sigue intentándolo.";
    botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
}

function aceptarContraoferta(monto, jugador, equipoOrigen) {
    if (monto > presupuestoFichajes) {
        alert("No tienes suficiente presupuesto.");
        return;
    }
    presupuestoFichajes -= monto;
    var registro = "Fichaje de " + jugador.nombre + ": -" + monto.toLocaleString("es-ES") + "€";
    historialEconomia.unshift(registro);

    var src = mercadoTodasLasPlantillas[equipoOrigen];
    if (src) {
        for (var i = 0; i < src.length; i++) {
            if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                src.splice(i, 1);
                break;
            }
        }
    }
    plantillaActual.push(jugador);
    renderizarOficina();

    var resultadoDiv = document.getElementById("neg-resultado");
    if (resultadoDiv) {
        resultadoDiv.className = "neg-resultado exito";
        resultadoDiv.innerText = "¡Fichaje completado por " + monto.toLocaleString("es-ES") + "€!";
    }
    var botonesDiv = document.getElementById("neg-botones");
    if (botonesDiv) {
        botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
    }
    window.jugadorMercadoActual = null;
}

function abrirNegociacionCesion(jugador) {
    if (!jugador) return;
    var modal = document.getElementById("modal-negociacion");
    var titulo = document.getElementById("neg-titulo");
    var contenido = document.getElementById("neg-contenido");
    if (!modal || !titulo || !contenido) return;

    titulo.innerText = "📄 Cesión: " + jugador.nombre;

    contenido.innerHTML =
        '<div class="neg-info">Valor de mercado: <strong>' + (jugador.valor || "?") + '</strong></div>' +
        '<div class="neg-info">Edad: <strong>' + (jugador.edad || "?") + ' años</strong></div>' +
        '<div class="neg-input-group">' +
            '<label>Duración de la cesión</label>' +
            '<div class="neg-radio-group">' +
                '<div class="neg-radio-btn seleccionado" data-valor="6" onclick="seleccionarRadio(this)">6 meses</div>' +
                '<div class="neg-radio-btn" data-valor="12" onclick="seleccionarRadio(this)">1 año</div>' +
                '<div class="neg-radio-btn" data-valor="24" onclick="seleccionarRadio(this)">2 años</div>' +
            '</div>' +
        '</div>' +
        '<div class="neg-check-group">' +
            '<input type="checkbox" id="neg-chk-opcion" onchange="toggleOpcionCompra()">' +
            '<label for="neg-chk-opcion">Incluir opción de compra</label>' +
        '</div>' +
        '<div id="neg-opcion-compra" style="display:none" class="neg-input-group">' +
            '<label for="neg-input-precio-compra">Precio de compra acordado (€)</label>' +
            '<input type="number" id="neg-input-precio-compra" class="neg-input" min="0" step="100000" value="' + Math.round(parseValor(jugador.valor) * 0.6) + '">' +
        '</div>' +
        '<div class="neg-resultado" id="neg-resultado" style="display:none"></div>' +
        '<div class="neg-botones" id="neg-botones"></div>';

    var botonesDiv = document.getElementById("neg-botones");
    botonesDiv.innerHTML =
        '<button class="neg-btn-aceptar" onclick="enviarSolicitudCesion(window.jugadorMercadoActual)">Solicitar cesión</button>' +
        '<button class="neg-btn-rechazar" onclick="cerrarModalNegociacion()">Cancelar</button>';

    modal.classList.add("activo");
}

function seleccionarRadio(el) {
    var parent = el.parentElement;
    parent.querySelectorAll(".neg-radio-btn").forEach(function (b) { b.classList.remove("seleccionado"); });
    el.classList.add("seleccionado");
}

function toggleOpcionCompra() {
    var chk = document.getElementById("neg-chk-opcion");
    var div = document.getElementById("neg-opcion-compra");
    if (div) div.style.display = chk && chk.checked ? "block" : "none";
}

function enviarSolicitudCesion(jugador) {
    if (!jugador) return;
    var resultadoDiv = document.getElementById("neg-resultado");
    var botonesDiv = document.getElementById("neg-botones");
    if (!resultadoDiv || !botonesDiv) return;

    var duracion = 6;
    var selected = document.querySelector("#neg-contenido .neg-radio-btn.seleccionado");
    if (selected) duracion = parseInt(selected.dataset.valor) || 6;

    var conOpcion = document.getElementById("neg-chk-opcion") && document.getElementById("neg-chk-opcion").checked;
    var precioCompra = 0;
    if (conOpcion) {
        var inp = document.getElementById("neg-input-precio-compra");
        if (inp) precioCompra = parseInt(inp.value) || 0;
    }

    var edad = jugador.edad || 99;
    var probabilidad = edad < 25 ? 0.8 : 0.5;
    var acepta = Math.random() < probabilidad;

    resultadoDiv.style.display = "block";

    if (acepta) {
        var msg = "El club acepta la cesión de " + jugador.nombre + " por " + duracion + " meses.";
        if (conOpcion && precioCompra > 0) {
            msg += " Con opción de compra por " + precioCompra.toLocaleString("es-ES") + "€.";

            // Remove from source, add to user, record the future purchase option
            var registro = "Cesión con opción de compra de " + jugador.nombre + " (" + precioCompra.toLocaleString("es-ES") + "€)";
            historialEconomia.unshift(registro);
        } else {
            var registro = "Cesión de " + jugador.nombre + " por " + duracion + " meses";
            historialEconomia.unshift(registro);
        }

        // Move player to user's team
        var equipoOrigen = window.jugadorMercadoEquipo;
        var src = mercadoTodasLasPlantillas[equipoOrigen];
        if (src) {
            for (var i = 0; i < src.length; i++) {
                if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                    src.splice(i, 1);
                    break;
                }
            }
        }
        plantillaActual.push(jugador);
        renderizarOficina();

        resultadoDiv.className = "neg-resultado exito";
        resultadoDiv.innerText = msg;
        botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
        window.jugadorMercadoActual = null;
    } else {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "El club ha rechazado la solicitud de cesión.";
        botonesDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarModalNegociacion()">Cerrar</button>';
    }
}

function abrirNegociacionCesionOpcionCompra(jugador) {
    if (!jugador) return;
    abrirNegociacionCesion(jugador);
    var chk = document.getElementById("neg-chk-opcion");
    if (chk) {
        chk.checked = true;
        toggleOpcionCompra();
    }
}

function formatearValor(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(".0", "") + "K";
    return String(num);
}

function ocultarInfoJugador() {
    var secciones = document.querySelectorAll(".tarjeta-datos-tecnicos, .tarjeta-estadisticas, .historial-partidos, .acciones-fichajes-modal, #mercado-acciones-modal");
    for (var i = 0; i < secciones.length; i++) {
        if (secciones[i]) {
            secciones[i].dataset.displayOriginal = secciones[i].style.display || "";
            secciones[i].style.display = "none";
        }
    }
}

function mostrarInfoJugador() {
    var secciones = document.querySelectorAll(".tarjeta-datos-tecnicos, .tarjeta-estadisticas, .historial-partidos, .acciones-fichajes-modal, #mercado-acciones-modal");
    for (var i = 0; i < secciones.length; i++) {
        if (secciones[i]) {
            secciones[i].style.display = secciones[i].dataset.displayOriginal || "";
            delete secciones[i].dataset.displayOriginal;
        }
    }
}

function mostrarFormularioFichaje() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    ocultarInfoJugador();

    var negInline = document.getElementById("negociacion-inline");
    document.getElementById("form-fichar").style.display = "block";
    document.getElementById("form-cesion").style.display = "none";
    document.getElementById("form-cesion-opcion").style.display = "none";

    document.getElementById("resultado-fichaje").style.display = "none";
    document.getElementById("resultado-fichaje").innerHTML = "";
    document.getElementById("accion-fichaje").style.display = "none";

    document.getElementById("info-valor-fichaje").innerHTML = 'Valor de mercado: <strong>' + (jugador.valor || "?") + '</strong>';
    var valorNumerico = parseValor(jugador.valor);
    document.getElementById("input-oferta-compra").value = valorNumerico > 0 ? Math.round(valorNumerico * 0.7) : 1000000;

    // Animate in
    negInline.style.display = "block";
    void negInline.offsetHeight;
    negInline.classList.add("activo");
}

function mostrarFormularioCesion() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    ocultarInfoJugador();

    var negInline = document.getElementById("negociacion-inline");
    document.getElementById("form-fichar").style.display = "none";
    document.getElementById("form-cesion").style.display = "block";
    document.getElementById("form-cesion-opcion").style.display = "none";

    document.getElementById("resultado-cesion").style.display = "none";
    document.getElementById("resultado-cesion").innerHTML = "";

    negInline.style.display = "block";
    void negInline.offsetHeight;
    negInline.classList.add("activo");
}

function mostrarFormularioCesionOpcion() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    ocultarInfoJugador();

    var negInline = document.getElementById("negociacion-inline");
    document.getElementById("form-fichar").style.display = "none";
    document.getElementById("form-cesion").style.display = "none";
    document.getElementById("form-cesion-opcion").style.display = "block";

    document.getElementById("resultado-opcion").style.display = "none";
    document.getElementById("resultado-opcion").innerHTML = "";

    var valorNumerico = parseValor(jugador.valor);
    document.getElementById("input-precio-opcion").value = valorNumerico > 0 ? Math.round(valorNumerico * 1.15) : 1000000;

    negInline.style.display = "block";
    void negInline.offsetHeight;
    negInline.classList.add("activo");
}

function volverAlDetalleJugador() {
    var negInline = document.getElementById("negociacion-inline");
    negInline.classList.remove("activo");
    setTimeout(function () {
        negInline.style.display = "none";
        mostrarInfoJugador();
        var esRival = !!window.jugadorMercadoActual;
        if (esRival) {
            var ma = document.getElementById("mercado-acciones-modal");
            if (ma) ma.style.display = "flex";
        }
    }, 250);
}

function enviarOfertaCompra() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    var input = document.getElementById("input-oferta-compra");
    var monto = parseInt(input.value) || 0;
    var valorNumerico = parseValor(jugador.valor);
    var resultadoDiv = document.getElementById("resultado-fichaje");
    var accionDiv = document.getElementById("accion-fichaje");

    resultadoDiv.style.display = "block";

    if (monto <= 0) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "Introduce una oferta válida.";
        return;
    }

    if (monto > presupuestoFichajes) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "No tienes suficiente presupuesto. Dispones de " + presupuestoFichajes.toLocaleString("es-ES") + "€.";
        return;
    }

    var ratio = monto / valorNumerico;

    if (ratio >= 1.0) {
        // Accepted!
        var equipoOrigen = window.jugadorMercadoEquipo;
        presupuestoFichajes -= monto;
        var registro = "Fichaje de " + jugador.nombre + ": -" + monto.toLocaleString("es-ES") + "€";
        historialEconomia.unshift(registro);

        var src = mercadoTodasLasPlantillas[equipoOrigen];
        if (src) {
            for (var i = 0; i < src.length; i++) {
                if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                    src.splice(i, 1);
                    break;
                }
            }
        }
        plantillaActual.push(jugador);
        renderizarOficina();
        renderizarEconomia();

        resultadoDiv.className = "neg-resultado exito";
        resultadoDiv.innerText = "¡Oferta aceptada! " + jugador.nombre + " se une a tu club por " + monto.toLocaleString("es-ES") + "€.";
        accionDiv.style.display = "block";
        accionDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="cerrarDetalleJugador()">Cerrar</button>';
        window.jugadorMercadoActual = null;
        return;
    }

    if (ratio >= 0.8) {
        // Counter-offer: market value + 10%
        var montoContra = Math.round(valorNumerico * 1.1);
        if (montoContra > presupuestoFichajes) {
            resultadoDiv.className = "neg-resultado rechazo";
            resultadoDiv.innerText = "El club pide " + montoContra.toLocaleString("es-ES") + "€, pero no tienes suficiente presupuesto.";
            accionDiv.style.display = "block";
            accionDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="volverAlDetalleJugador()">Cerrar</button>';
            return;
        }
        resultadoDiv.className = "neg-resultado contraoferta";
        resultadoDiv.innerHTML = 'El club rechaza tu oferta.<br>El club aceptaría venderlo por <strong>' + montoContra.toLocaleString("es-ES") + '€</strong>.';
        input.value = montoContra;
        accionDiv.style.display = "block";
        accionDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="enviarOfertaCompra()">Reintentar con la contraoferta</button>' +
            '<button class="neg-btn-rechazar" onclick="volverAlDetalleJugador()">Cancelar</button>';
        return;
    }

    // Offer < 80% — insulting
    resultadoDiv.className = "neg-resultado rechazo";
    resultadoDiv.innerText = "La oferta es insultante. El club rival rompe las negociaciones.";
    accionDiv.style.display = "block";
    accionDiv.innerHTML = '<button class="neg-btn-aceptar" onclick="volverAlDetalleJugador()">Aceptar</button>';
}

function enviarPropuestaCesion() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    var duracion = parseInt(document.getElementById("select-duracion-cesion").value) || 6;
    var resultadoDiv = document.getElementById("resultado-cesion");
    resultadoDiv.style.display = "block";

    var poderVal = jugador.poder || jugador.rating || 0;

    if (poderVal > 80) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "El club rival no está interesado en ceder a un jugador clave de su plantilla.";
        return;
    }

    // Accepted
    jugador.cedido = true;
    jugador.duracionCesion = duracion;

    var equipoOrigen = window.jugadorMercadoEquipo;
    var src = mercadoTodasLasPlantillas[equipoOrigen];
    if (src) {
        for (var i = 0; i < src.length; i++) {
            if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                src.splice(i, 1);
                break;
            }
        }
    }
    plantillaActual.push(jugador);
    renderizarOficina();

    var registro = "Cesión de " + jugador.nombre + " por " + duracion + " meses";
    historialEconomia.unshift(registro);

    resultadoDiv.className = "neg-resultado exito";
    resultadoDiv.innerText = "¡Cesión aceptada! " + jugador.nombre + " jugará en tu club durante " + duracion + " meses.";
    window.jugadorMercadoActual = null;
}

function enviarPropuestaCesionOpcion() {
    var jugador = window.jugadorMercadoActual;
    if (!jugador) return;

    var duracion = parseInt(document.getElementById("select-duracion-opcion").value) || 6;
    var precioOpcion = parseInt(document.getElementById("input-precio-opcion").value) || 0;
    var valorNumerico = parseValor(jugador.valor);
    var resultadoDiv = document.getElementById("resultado-opcion");
    resultadoDiv.style.display = "block";

    if (precioOpcion <= 0) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "Introduce un precio de opción de compra válido.";
        return;
    }

    if (precioOpcion < valorNumerico) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "No aceptamos ese precio de compra futuro, el jugador vale más.";
        return;
    }

    // Need price >= value * 1.15
    var precioMinimo = Math.round(valorNumerico * 1.15);
    if (precioOpcion < precioMinimo) {
        resultadoDiv.className = "neg-resultado rechazo";
        resultadoDiv.innerText = "No aceptamos ese precio de compra futuro. Necesitamos al menos " + formatearValor(precioMinimo) + "€ (" + formatearValor(valorNumerico) + " + 15%).";
        return;
    }

    // Accepted
    jugador.cedido = true;
    jugador.duracionCesion = duracion;
    jugador.precioOpcionCompra = precioOpcion;

    var equipoOrigen = window.jugadorMercadoEquipo;
    var src = mercadoTodasLasPlantillas[equipoOrigen];
    if (src) {
        for (var i = 0; i < src.length; i++) {
            if (src[i].id === jugador.id || src[i].nombre === jugador.nombre) {
                src.splice(i, 1);
                break;
            }
        }
    }
    plantillaActual.push(jugador);
    renderizarOficina();

    var registro = "Cesión con opción de compra de " + jugador.nombre + " (" + precioOpcion.toLocaleString("es-ES") + "€)";
    historialEconomia.unshift(registro);

    resultadoDiv.className = "neg-resultado exito";
    resultadoDiv.innerText = "¡Propuesta aceptada! " + jugador.nombre + " llega cedido y podrás ficharlo definitivamente por " + precioOpcion.toLocaleString("es-ES") + "€.";
    window.jugadorMercadoActual = null;
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll(".nav-tab").forEach(function (t) {
        t.classList.remove("activo");
    });
    document.querySelectorAll('.nav-tab[onclick*="' + idPantalla + '"]').forEach(function (t) {
        t.classList.add("activo");
    });
    document.querySelectorAll(".seccion-juego").forEach(function (el) {
        el.style.display = "none";
    });
    var destino = document.getElementById("pantalla-" + idPantalla);
    if (destino) destino.style.display = "block";
    if (idPantalla === "calendario") renderizarCalendario();
    if (idPantalla === "economia") renderizarEconomia();
    if (idPantalla === "estadio") renderizarEstadio();
    if (idPantalla === "mercado") {
        cargarMercadoJugadores();
        document.getElementById("buscador-jugadores").value = "";
        document.getElementById("resultados-mercado").innerHTML = '<p style="color:#888;font-size:12px;padding:20px;text-align:center">Escribe al menos 2 caracteres para buscar.</p>';
    }
}

function abrirModalCalendario() {
    alert("Calendario completo próximamente.");
}

const baseDeDatosMundo = {
    "Europa": {
        "España": {
            "LaLiga EA Sports": {
                equipos: [
                    crearEquipo("Athletic Club", "img/clubes/347.jpg", 24, 90, "data/athletic.json"),
                    crearEquipo("Atlético de Madrid", "img/clubes/369.jpg", 24, 92, "data/atletico.json"),
                    crearEquipo("Celta", "img/clubes/712.jpg", 30, 85, "data/celta.json"),
                    crearEquipo("Deportivo Alavés", "img/clubes/137.jpg", 30, 82, "data/alaves.json"),
                    crearEquipo("Elche", "img/clubes/975.jpg", 24, 80, "data/elche.json"),
                    crearEquipo("Espanyol", "img/clubes/998.jpg", 28, 82, "data/espanyol.json"),
                    crearEquipo("FC Barcelona", "img/clubes/429.jpg", 30, 95, "data/barcelona.json"),
                    crearEquipo("Getafe", "img/clubes/1217.jpg", 19, 83, "data/getafe.json"),
                    crearEquipo("Girona", "img/clubes/1236.jpg", 25, 85, "data/girona.json"),
                    crearEquipo("Levante", "img/clubes/1547.jpg", 22, 80, "data/levante.json"),
                    crearEquipo("Mallorca", "img/clubes/1623.jpg", 23, 83),
                    crearEquipo("Osasuna", "img/clubes/1887.jpg", 24, 84),
                    crearEquipo("Rayo Vallecano", "img/clubes/2080.jpg", 23, 83),
                    crearEquipo("Real Betis", "img/clubes/486.jpg", 24, 88),
                    crearEquipo("Real Madrid", "img/clubes/2107.jpg", 25, 95),
                    crearEquipo("Real Oviedo", "img/clubes/2115.jpg", 23, 79),
                    crearEquipo("Real Sociedad", "img/clubes/2120.jpg", 24, 88),
                    crearEquipo("Sevilla", "img/clubes/1102.jpg", 24, 85),
                    crearEquipo("Valencia", "img/clubes/2647.jpg", 24, 85),
                    crearEquipo("Villarreal", "img/clubes/2716.jpg", 24, 89)
                ]
            },
            "LaLiga Hypermotion": {
                equipos: []
            }
        },
        "Inglaterra": {
            "Premier League": {
                equipos: [
                    crearEquipo("Manchester City", "img/clubes/manchester_city.png", 25, 91),
                    crearEquipo("Arsenal", "img/clubes/arsenal.png", 25, 88),
                    crearEquipo("Liverpool", "img/clubes/liverpool.png", 25, 87)
                ]
            },
            "Championship": {
                equipos: []
            }
        },
        "Italia": {
            "Serie A": {
                equipos: []
            }
        }
    },
    "Norteamérica": {
        "México": {
            "Liga MX": {
                equipos: []
            }
        },
        "Estados Unidos": {
            "MLS": {
                equipos: []
            }
        }
    },
    "Sudamérica": {
        "Argentina": {
            "Primera División": {
                equipos: []
            },
            "Primera Nacional": {
                equipos: []
            }
        },
        "Brasil": {
            "Brasileirão": {
                equipos: []
            }
        }
    },
    "África": {
        "Sudáfrica": {
            "PSL": {
                equipos: []
            }
        },
        "Egipto": {
            "Egyptian Premier League": {
                equipos: []
            }
        }
    },
    "Asia": {
        "Japón": {
            "J1 League": {
                equipos: []
            }
        },
        "Arabia Saudí": {
            "Pro League": {
                equipos: []
            }
        }
    },
    "Oceanía": {
        "Australia": {
            "A-League": {
                equipos: []
            }
        }
    }
};

// ==========================================================================
// 2. VARIABLES GLOBALES DE LA PARTIDA
// ==========================================================================
let nombreManager = "";
let nacionalidadManager = "";
let continenteSeleccionado = "";
let paisSeleccionado = "";
let equipoSeleccionado = null;
let jornadaActual = 1;
let posicionActual = 10;
let confianzaDirectiva = 80;
let presupuestoFichajes = 50000000;
let historialEconomia = [];
let mercadoTodasLasPlantillas = {};
let estadioZonas = {
    palcos:  { nombre: "Palcos VIP",  icono: "💎", asientos: 2000,  precio: 250, precioBase: 250 },
    tribuna: { nombre: "Tribuna",     icono: "👑", asientos: 18000, precio: 90,  precioBase: 90 },
    platea:  { nombre: "Platea",      icono: "💺", asientos: 35000, precio: 55,  precioBase: 55 },
    general: { nombre: "General",     icono: "🎫", asientos: 40000, precio: 30,  precioBase: 30 }
};
let ligaSeleccionadaActual = "";
let plantillaActual = [];
let titularesActuales = [];
let tacticaGuardada = {
    formacion: "4-3-3",
    titulares: [null, null, null, null, null, null, null, null, null, null, null],
    sustitutos: [null, null, null, null, null, null, null, null, null, null, null, null]
};
let jugadorActivo = null;
window.titularesActuales = titularesActuales;

let calendarioLiga = [];

var _nombres = ["Álex","Marcos","Javier","Carlos","David","Daniel","Pablo","Sergio","Adrián","Hugo","Liam","Noah","James","Lucas","Mateo","Leo","Gabriel","Samuel","Diego","Antonio"];
var _apellidos = ["García","Rodríguez","Martínez","López","Sánchez","González","Pérez","Fernández","Ruiz","Jiménez","Molina","Castro","Ortega","Navarro","Ramos","Gil","Díaz","Serrano","Blanco","Mendoza"];
var _posicionesBase = ["POR","LD","DFC","DFC","LI","MCD","MC","MC","MI","MD","ED","EI","DC"];

function generarPlantillaClub(nombreClub) {
    var top = ["Real Madrid","FC Barcelona","Atlético de Madrid"];
    var mid = ["Athletic Club","Real Betis","Real Sociedad","Sevilla","Valencia","Villarreal"];
    var baseMin, baseMax;
    if (top.indexOf(nombreClub) >= 0) { baseMin = 82; baseMax = 90; }
    else if (mid.indexOf(nombreClub) >= 0) { baseMin = 74; baseMax = 82; }
    else { baseMin = 68; baseMax = 75; }

    var plantilla = [];
    for (var i = 0; i < 20; i++) {
        var nom = _nombres[Math.floor(Math.random() * _nombres.length)];
        var ape = _apellidos[Math.floor(Math.random() * _apellidos.length)];
        var nombre = nom + " " + ape;
        var pos = _posicionesBase[i % _posicionesBase.length];
        var media = baseMin + Math.floor(Math.random() * (baseMax - baseMin + 1));
        var variacion = function () { return Math.max(40, Math.min(99, media + Math.floor(Math.random() * 11 - 5))); };
        var ritmo = variacion(), tiro = variacion(), pase = variacion(), regate = variacion(), defensa = variacion(), fisico = variacion();
        var valorNum = Math.round((media * 0.7 + (media - 60) * 0.3) * 100000);
        var valorStr;
        if (valorNum >= 1000000) valorStr = (valorNum / 1000000).toFixed(1).replace(".0", "") + "M";
        else if (valorNum >= 1000) valorStr = Math.round(valorNum / 1000) + "K";
        else valorStr = String(valorNum);

        plantilla.push({
            nombre: nombre, posicion: pos, edad: 18 + Math.floor(Math.random() * 18),
            media: media, poder: media, rating: media,
            ritmo: ritmo, tiro: tiro, pase: pase, regate: regate, defensa: defensa, fisico: fisico,
            valor: valorStr, nacionalidad: "🇪🇸", pierna: Math.random() < 0.7 ? "DER" : "IZQ",
            foto: "img/jugadores/67849.jpg"
        });
    }
    return plantilla;
}

function generarPlantillasIniciales() {
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        var eq = laLigaClasificacion[i];
        if (eq.jugadores && eq.jugadores.length > 0) continue;
        eq.jugadores = generarPlantillaClub(eq.nombre);
    }
}

function abrirPlantillaRival(nombreClub) {
    if (window.xhrPlantillaRival) {
        window.xhrPlantillaRival.abort();
    }

    var modal = document.getElementById("modal-plantilla-rival");
    var titulo = document.getElementById("rival-titulo-club");
    if (!modal || !titulo) return;

    titulo.innerText = nombreClub;
    modal.classList.add("activo");

    // Reset all tabs to plantilla
    document.querySelectorAll(".rival-tab-content").forEach(function (el) { el.classList.remove("activo"); });
    document.querySelectorAll(".rival-tab").forEach(function (el) { el.classList.remove("activo"); });
    var tabPlantilla = document.querySelector('.rival-tab[data-tab="plantilla"]');
    if (tabPlantilla) tabPlantilla.classList.add("activo");
    document.getElementById("rival-tab-plantilla").classList.add("activo");

    var cont = document.getElementById("rival-lista-jugadores");
    if (cont) cont.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">Cargando...</p>';

    // Populate General tab from clasificacion
    var datosClub = null;
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        if (laLigaClasificacion[i].nombre === nombreClub) {
            datosClub = laLigaClasificacion[i];
            break;
        }
    }
    if (datosClub) {
        var posTexto = "?";
        for (var j = 0; j < laLigaClasificacion.length; j++) {
            if (laLigaClasificacion[j].nombre === nombreClub) {
                posTexto = j + 1;
                break;
            }
        }
        document.getElementById("rival-tab-general").innerHTML =
            '<div style="text-align:center;padding:16px">' +
                '<img src="' + (datosClub.escudo || "") + '" style="width:64px;height:64px;object-fit:contain;margin-bottom:8px" onerror="this.style.display=\'none\'">' +
                '<h3 style="font-size:16px;margin:4px 0 8px;color:#111">' + nombreClub + '</h3>' +
                '<div style="font-size:12px;color:#555;margin-bottom:4px">🧑‍🏫 ' + (nombreClub === (equipoSeleccionado && equipoSeleccionado.nombre) ? (window.entrenadorUsuario || "Tú") + ' 🟢' : (entrenadoresLiga[nombreClub] || "Sin entrenador")) + '</div>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:13px;color:#555;margin-top:8px">' +
                    '<div><strong style="color:#111;font-size:18px">' + posTexto + 'º</strong><br>Posición</div>' +
                    '<div><strong style="color:#111;font-size:18px">' + (datosClub.pj || 0) + '</strong><br>Partidos</div>' +
                    '<div><strong style="color:#111;font-size:18px">' + (datosClub.pts || 0) + '</strong><br>Puntos</div>' +
                '</div>' +
                '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;font-size:13px;color:#555;margin-top:8px">' +
                    '<div><strong style="color:#3B811F">' + (datosClub.pg || 0) + '</strong><br>Ganados</div>' +
                    '<div><strong style="color:#e67e22">' + (datosClub.pe || 0) + '</strong><br>Empatados</div>' +
                    '<div><strong style="color:#d32f2f">' + (datosClub.pp || 0) + '</strong><br>Perdidos</div>' +
                '</div>' +
                '<div style="margin-top:10px;font-size:13px;color:#555">' +
                    'Goles: <strong>' + (datosClub.gf || 0) + '</strong> / <strong>' + (datosClub.gc || 0) + '</strong> (DF: ' + ((datosClub.gf || 0) - (datosClub.gc || 0)) + ')' +
                '</div>' +
            '</div>';
    }

    // Populate Calendario tab
    document.getElementById("rival-tab-calendario").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">Cargando calendario...</p>';

    // Populate Traspasos tab
    document.getElementById("rival-tab-traspasos").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">No hay datos de traspasos disponibles.</p>';

    // Populate Alineación tab
    document.getElementById("rival-tab-alineacion").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">Cargando...</p>';

    // Populate Estadísticas tab
    document.getElementById("rival-tab-estadisticas").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">Cargando...</p>';

    // Setup tab switching
    document.querySelectorAll(".rival-tab").forEach(function (btn) {
        btn.onclick = function () {
            var tab = this.dataset.tab;
            document.querySelectorAll(".rival-tab").forEach(function (b) { b.classList.remove("activo"); });
            this.classList.add("activo");
            document.querySelectorAll(".rival-tab-content").forEach(function (c) { c.classList.remove("activo"); });
            var target = document.getElementById("rival-tab-" + tab);
            if (target) target.classList.add("activo");
        };
    });

    // Map team name to JSON filename
    var slug = nombreClub.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
    var manualMap = {
        "fc-barcelona": "barcelona",
        "atletico-de-madrid": "atletico",
        "deportivo-alaves": "alaves",
        "real-madrid": "real-madrid",
        "real-betis": "real-betis",
        "real-sociedad": "real-sociedad",
        "real-oviedo": "real-oviedo",
        "rayo-vallecano": "rayo-vallecano",
        "girona": "girona",
        "athletic-club": "athletic",
        "celta": "celta",
        "elche": "elche",
        "espanyol": "espanyol",
        "getafe": "getafe",
        "levante": "levante"
    };
    var archivo = manualMap[slug] || slug;
    var url = "data/" + archivo + ".json";

    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr !== window.xhrPlantillaRival) return;

        var jugadores = [];
        if (xhr.status === 200 || xhr.status === 0) {
            try { jugadores = JSON.parse(xhr.responseText); } catch (e) {}
        }

        if (cont) cont.innerHTML = "";

        if (jugadores.length === 0) {
            if (cont) cont.innerHTML = '<p style="color:#888;font-size:13px;text-align:center;padding:20px">No se pudo cargar la plantilla.</p>';
            document.getElementById("rival-tab-alineacion").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">No hay datos.</p>';
            document.getElementById("rival-tab-estadisticas").innerHTML = '<p style="color:#888;font-size:12px;text-align:center;padding:16px">No hay datos.</p>';
            return;
        }

        // Sort by position order (same as JSON)
        var ordenPosiciones = {
            "POR": 0, "PO": 1,
            "LD": 2, "LI": 3, "DFC": 4, "CAD": 5, "CAI": 6,
            "MCD": 7, "MC": 8, "MCO": 9, "MI": 10, "MD": 11,
            "ED": 12, "EI": 13, "DC": 14
        };
        jugadores.sort(function (a, b) {
            var pa = ordenPosiciones[(a.posicion || "").toUpperCase()] !== undefined ? ordenPosiciones[(a.posicion || "").toUpperCase()] : 99;
            var pb = ordenPosiciones[(b.posicion || "").toUpperCase()] !== undefined ? ordenPosiciones[(b.posicion || "").toUpperCase()] : 99;
            if (pa !== pb) return pa - pb;
            return (a.nombre || "").localeCompare(b.nombre || "");
        });

        // Plantilla tab
        jugadores.forEach(function (j) {
            var poderVal = j.poder || j.rating || 0;
            var item = document.createElement("div");
            item.className = "fila-jugador";

            var bloquePosicion = document.createElement("div");
            bloquePosicion.className = "bloque-posicion-oficina";

            var posOriginal = (j.posicion || "").toUpperCase();
            var colorClase = "pos-desconocido";
            if (posOriginal === "POR" || posOriginal === "PO") {
                colorClase = "pos-portero";
            } else if (["DFC","LD","LI","CAD","CAI","DEF","LB","RB","CB"].indexOf(posOriginal) >= 0) {
                colorClase = "pos-defensa";
            } else if (["MCD","MC","MCO","MI","MD","MED","CM","CAM","CDM"].indexOf(posOriginal) >= 0) {
                colorClase = "pos-mediocentro";
            } else if (["DC","ED","EI","DEL","ST","LW","RW","CF"].indexOf(posOriginal) >= 0) {
                colorClase = "pos-delantero";
            }

            var posicionJugador = document.createElement("span");
            posicionJugador.className = "posicion-jugador " + colorClase;
            posicionJugador.innerText = j.posicion || "-";

            var pieJugador = document.createElement("span");
            pieJugador.className = "pie-jugador-bajo-posicion";
            var piernaOriginal = (j.pierna || "").toLowerCase();
            var textoPie = "-";
            if (piernaOriginal.includes("der") || piernaOriginal === "d") textoPie = "der";
            else if (piernaOriginal.includes("izq") || piernaOriginal === "i") textoPie = "izq";
            else if (piernaOriginal.includes("amb") || piernaOriginal === "a") textoPie = "amb";
            pieJugador.innerText = textoPie;
            bloquePosicion.appendChild(posicionJugador);
            bloquePosicion.appendChild(pieJugador);
            item.appendChild(bloquePosicion);

            var nacionalidadJugador = document.createElement("span");
            nacionalidadJugador.className = "nacionalidad-jugador-oficina";
            nacionalidadJugador.innerText = j.nacionalidad || "🌍";
            item.appendChild(nacionalidadJugador);

            var nombreJugador = document.createElement("span");
            nombreJugador.className = "nombre-jugador-oficina";
            var textoNombreJugador = document.createElement("span");
            textoNombreJugador.className = "nombre-jugador-texto";
            textoNombreJugador.innerText = j.nombre;
            nombreJugador.appendChild(textoNombreJugador);
            item.appendChild(nombreJugador);

            var edadJugador = document.createElement("span");
            edadJugador.className = "edad-jugador-oficina";
            edadJugador.innerText = j.edad != null ? String(j.edad) : "-";
            item.appendChild(edadJugador);

            var valorJugador = document.createElement("span");
            valorJugador.className = "valor-jugador-oficina";
            valorJugador.innerText = j.valor || "-";
            item.appendChild(valorJugador);

            var poderJugador = document.createElement("span");
            poderJugador.className = "poder-jugador-oficina";
            poderJugador.innerText = String(poderVal);
            item.appendChild(poderJugador);

            item.onclick = (function (jug) {
                return function () {
                    abrirDetalleMercado(jug, nombreClub);
                };
            })(j);
            if (cont) cont.appendChild(item);
        });

        // Alineación tab: tactical field with best 11
        (function () {
            // Detect best formation based on squad
            var formacion = formacionesEquipos[nombreClub];
            if (!formacion) {
                formacion = "4-3-3";
                var contar = { POR: 0, LD: 0, LI: 0, DFC: 0, MCD: 0, MC: 0, MCO: 0, MI: 0, MD: 0, ED: 0, EI: 0, DC: 0 };
                jugadores.forEach(function (j) {
                    var p = (j.posicion || "").toUpperCase();
                    if (contar[p] !== undefined) contar[p]++;
                });
                var totalDef = contar.LD + contar.LI + contar.DFC;
                var totalMed = contar.MCD + contar.MC + contar.MCO + contar.MI + contar.MD;
                var totalDel = contar.ED + contar.EI + contar.DC;
                if (totalDef >= 5 && totalMed >= 4 && totalDel >= 2) formacion = "5-3-2";
                else if (totalDef >= 4 && totalMed >= 3 && totalDel >= 3) formacion = "4-3-3";
                else if (totalDef >= 4 && totalMed >= 4 && totalDel >= 2) formacion = "4-4-2";
                else if (totalDef >= 3 && totalMed >= 5 && totalDel >= 2) formacion = "3-5-2";
                else if (totalDef >= 5 && totalMed >= 3 && totalDel >= 1) formacion = "5-4-1";
                else if (totalDef >= 4 && totalMed >= 2 && totalDel >= 3) formacion = "4-2-3-1";
            } else if (Array.isArray(formacion)) {
                formacion = formacion[0];
            }

            var posiciones = POSICIONES_FORMACION[formacion] || POSICIONES_FORMACION["4-3-3"];
            var disponibles = jugadores.slice();

            // Map position tags to compatible positions (priority order)
            var compatibilidad = {
                "POR": ["POR"],
                "LD": ["LD", "CAD", "MD"],
                "LI": ["LI", "CAI", "MI"],
                "DFC": ["DFC", "LD", "LI", "CAD", "CAI"],
                "CAD": ["CAD", "LD"],
                "CAI": ["CAI", "LI"],
                "MCD": ["MCD", "MC"],
                "MC": ["MC", "MCD", "MCO"],
                "MCO": ["MCO", "MC", "MI", "MD"],
                "MI": ["MI", "MD", "LI", "EI"],
                "MD": ["MD", "MI", "LD", "ED"],
                "ED": ["ED", "EI", "MI", "MD"],
                "EI": ["EI", "ED", "MI", "MD"],
                "DC": ["DC", "MCO", "ED", "EI"]
            };

            function encontrarMejor(slotTag) {
                var compats = compatibilidad[slotTag] || [slotTag];
                var bestIdx = -1, bestPoder = -1;
                for (var ci = 0; ci < compats.length; ci++) {
                    for (var di = 0; di < disponibles.length; di++) {
                        var pos = (disponibles[di].posicion || "").toUpperCase();
                        if (pos === compats[ci]) {
                            var pod = disponibles[di].poder || disponibles[di].rating || 0;
                            if (pod > bestPoder) { bestPoder = pod; bestIdx = di; }
                        }
                    }
                    if (bestIdx >= 0) break;
                }
                if (bestIdx < 0 && slotTag !== "POR") {
                    for (var di = 0; di < disponibles.length; di++) {
                        if ((disponibles[di].posicion || "").toUpperCase() !== "POR") {
                            bestIdx = di; break;
                        }
                    }
                }
                if (bestIdx >= 0) return disponibles.splice(bestIdx, 1)[0];
                return null;
            }

            var alineacion = [];
            posiciones.forEach(function (slot) {
                alineacion.push(encontrarMejor(slot.etiqueta));
            });

            // Last match info
            var ultimoPartido = null;
            for (var mi = calendarioLiga.length - 1; mi >= 0; mi--) {
                var p = calendarioLiga[mi];
                if (p.jugado && (p.local.nombre === nombreClub || p.visitante.nombre === nombreClub)) {
                    ultimoPartido = p;
                    break;
                }
            }

            var headerHtml = "";
            if (ultimoPartido) {
                var rival = ultimoPartido.local === nombreClub ? ultimoPartido.visitante : ultimoPartido.local;
                headerHtml = '<div style="text-align:center;font-size:12px;color:#555;padding:4px 0 6px">' +
                    'Último partido · J' + ultimoPartido.jornada + ': ' +
                    '<strong>' + ultimoPartido.local + '</strong> <span style="color:#3B811F;font-weight:700">' + (ultimoPartido.resultado || "-") + '</span> <strong>' + ultimoPartido.visitante + '</strong>' +
                    '</div>';
            } else {
                // Find next match
                var proxPartido = null;
                for (var mi2 = 0; mi2 < calendarioLiga.length; mi2++) {
                    var p2 = calendarioLiga[mi2];
                    if (!p2.jugado && (p2.local === nombreClub || p2.visitante === nombreClub)) {
                        proxPartido = p2;
                        break;
                    }
                }
                if (proxPartido) {
                    var rival2 = proxPartido.local === nombreClub ? proxPartido.visitante : proxPartido.local;
                    headerHtml = '<div style="text-align:center;font-size:12px;color:#555;padding:4px 0 6px">' +
                        'Próximo partido · J' + proxPartido.jornada + ': ' +
                        '<strong>' + proxPartido.local + '</strong> vs <strong>' + proxPartido.visitante + '</strong>' +
                        '</div>';
                }
            }

            // Build mini field
            var campoHtml = '<div style="padding:0 4px">' +
                headerHtml +
                '<div style="font-size:10px;color:#888;text-align:center;margin-bottom:4px">' + formacion + ' · Alineación probable</div>' +
                '<div class="mini-campo-rival">' +
                    '<div class="lineas-campo">' +
                        '<div class="linea-medio-campo"></div>' +
                        '<div class="circulo-central"></div>' +
                        '<div class="area-grande area-arriba"></div>' +
                        '<div class="area-grande area-abajo"></div>' +
                        '<div class="area-pequena area-arriba"></div>' +
                        '<div class="area-pequena area-abajo"></div>' +
                    '</div>';

            alineacion.forEach(function (jug, idx) {
                var slot = posiciones[idx];
                if (!slot) return;
                campoHtml += '<div class="nodo-campo-rival" style="left:' + slot.x + '%;top:' + slot.y + '%">';
                if (jug) {
                    var podVal = jug.poder || jug.rating || 0;
                    var apellido = (jug.nombre || "").split(" ").pop() || "-";
                    campoHtml +=
                        '<div class="nodo-jugador-rival">' +
                            '<div class="circulo-jugador-rival">' +
                                '<img src="' + (jug.foto || "img/jugadores/67849.jpg") + '" alt="" onerror="this.onerror=null;this.src=\'img/jugadores/67849.jpg\'">' +
                                '<span class="badge-poder-rival" style="background:' + (podVal >= 80 ? '#3B811F' : podVal >= 70 ? '#e67e22' : '#888') + '">' + podVal + '</span>' +
                            '</div>' +
                            '<div class="info-jugador-rival">' +
                                '<div class="nombre-linea-rival">' + apellido + '</div>' +
                                '<div class="pos-linea-rival">' + (jug.posicion || "-") + '</div>' +
                            '</div>' +
                        '</div>';
                } else {
                    campoHtml += '<span class="nodo-silueta-rival">' + slot.etiqueta + '</span>';
                }
                campoHtml += '</div>';
            });

            campoHtml += '</div></div>';
            document.getElementById("rival-tab-alineacion").innerHTML = campoHtml;
        })();

        // Estadísticas tab
        var mejor = jugadores.slice().sort(function (a, b) {
            return (b.poder || b.rating || 0) - (a.poder || a.rating || 0);
        })[0];
        var mediaEquipo = 0;
        jugadores.forEach(function (j) { mediaEquipo += (j.poder || j.rating || 0); });
        mediaEquipo = jugadores.length > 0 ? Math.round(mediaEquipo / jugadores.length) : 0;
        var totalValor = 0;
        jugadores.forEach(function (j) {
            var v = parseValor(j.valor);
            if (!isNaN(v)) totalValor += v;
        });

        document.getElementById("rival-tab-estadisticas").innerHTML =
            '<div style="padding:12px">' +
                '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">' +
                    '<div style="background:#f5f5f5;border-radius:8px;padding:12px;text-align:center">' +
                        '<div style="font-size:20px;font-weight:700;color:#111">' + mediaEquipo + '</div>' +
                        '<div style="font-size:11px;color:#888">Media del equipo</div>' +
                    '</div>' +
                    '<div style="background:#f5f5f5;border-radius:8px;padding:12px;text-align:center">' +
                        '<div style="font-size:20px;font-weight:700;color:#111">' + jugadores.length + '</div>' +
                        '<div style="font-size:11px;color:#888">Jugadores</div>' +
                    '</div>' +
                    '<div style="background:#f5f5f5;border-radius:8px;padding:12px;text-align:center">' +
                        '<div style="font-size:20px;font-weight:700;color:#111">' + (mejor ? (mejor.poder || mejor.rating || 0) : "-") + '</div>' +
                        '<div style="font-size:11px;color:#888">Mejor jugador</div>' +
                    '</div>' +
                    '<div style="background:#f5f5f5;border-radius:8px;padding:12px;text-align:center">' +
                        '<div style="font-size:20px;font-weight:700;color:#111">' + (totalValor >= 1000000 ? (totalValor / 1000000).toFixed(0) + "M" : (totalValor / 1000).toFixed(0) + "K") + '€</div>' +
                        '<div style="font-size:11px;color:#888">Valor total</div>' +
                    '</div>' +
                '</div>' +
                (mejor ? '<div style="margin-top:10px;font-size:12px;color:#555;text-align:center">Mejor jugador: <strong>' + mejor.nombre + '</strong> (' + (mejor.posicion || "-") + ')</div>' : '') +
            '</div>';

        // Calendario tab: filter matches for this team (same style as user's calendar)
        (function () {
            var contCal = document.getElementById("rival-tab-calendario");
            if (!contCal) return;
            contCal.innerHTML = "";

            var partidosEq = [];
            for (var mc = 0; mc < calendarioLiga.length; mc++) {
                var pc = calendarioLiga[mc];
                if (pc.local.nombre === nombreClub || pc.visitante.nombre === nombreClub) {
                    partidosEq.push(pc);
                }
            }
            partidosEq.sort(function (a, b) { return a.jornada - b.jornada; });

            if (partidosEq.length === 0) {
                contCal.innerHTML = '<p style="color:#888;font-size:13px;padding:20px;text-align:center">No hay partidos programados.</p>';
                return;
            }

            partidosEq.forEach(function (p) {
                var esLocal = p.local.nombre === nombreClub;
                var rivalObj = esLocal ? p.visitante : p.local;
                var marcadoJugado = p.jornada < jornadaActual;

                var filaCal = document.createElement("div");
                filaCal.className = "partido-cal-row" + (marcadoJugado ? " jugado" : "");

                var clubEscudo = "";
                var clubArr = laLigaClasificacion.find(function (e) { return e.nombre === nombreClub; });
                if (clubArr) clubEscudo = clubArr.escudo;

                var izq = document.createElement("div");
                izq.className = "partido-cal-izq";
                izq.innerHTML =
                    '<img class="partido-cal-logo" src="img/ligas/primera-division-ea.png" alt="Liga" onerror="this.style.display=\'none\'">' +
                    '<span class="partido-cal-icono">' + (esLocal ? "🏠" : "✈️") + "</span>" +
                    '<div class="partido-cal-equipos">' +
                        '<img class="partido-cal-escudo" src="' + clubEscudo + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'">' +
                        '<span class="partido-cal-vs">vs</span>' +
                        '<img class="partido-cal-escudo" src="' + (rivalObj.escudo || "img/clubes/429.jpg") + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'">' +
                        '<span class="partido-cal-nombre">' + rivalObj.nombre + "</span>" +
                    "</div>";

                var dcha = document.createElement("div");
                dcha.className = "partido-cal-dcha";
                dcha.innerHTML =
                    '<span class="partido-cal-jornada">Jornada ' + p.jornada + ' - ' + p.dia + '</span>' +
                    (p.jugado && p.resultado ? '<span class="partido-cal-resultado">' + p.resultado + '</span>' : '<span class="partido-cal-por-jugar">Por jugar</span>');

                filaCal.appendChild(izq);
                filaCal.appendChild(dcha);
                contCal.appendChild(filaCal);
            });
        })();
    };
    window.xhrPlantillaRival = xhr;
    xhr.send();
}

function cerrarPlantillaRival() {
    if (window.xhrPlantillaRival) {
        window.xhrPlantillaRival.abort();
        window.xhrPlantillaRival = null;
    }
    var modal = document.getElementById("modal-plantilla-rival");
    if (modal) modal.classList.remove("activo");
}

function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
    }
    return arr;
}

function asignarDiaPartido() {
    var r = Math.random();
    if (r < 0.10) return "Viernes";
    if (r < 0.50) return "Sábado";
    if (r < 0.90) return "Domingo";
    return "Lunes";
}

function generarCalendarioCompleto() {
    if (calendarioLiga.length > 0) return;
    if (laLigaClasificacion.length < 2) return;
    calendarioLiga = [];

    // Clone and order teams deterministically (no randomness)
    var equipos = laLigaClasificacion.map(function (e) { return e; });
    equipos.sort(function (a, b) { return b.nombre.localeCompare(a.nombre); });
    // Rotate so the user's team becomes first (the fixed team in Round Robin)
    var idxUsuario = equipos.findIndex(function (e) { return e.nombre === equipoSeleccionado.nombre; });
    if (idxUsuario > 0) {
        var parte = equipos.splice(0, idxUsuario);
        equipos = equipos.concat(parte);
    }

    // Round Robin algorithm for even number of teams
    var n = equipos.length; // 20
    var rondas = [];

    // If odd number, add a "bye" team (not needed since 20 is even)
    var equiposRound = equipos.slice();
    var fijo = equiposRound[0];
    var rotantes = equiposRound.slice(1);

    for (var r = 0; r < n - 1; r++) {
        var jornada = [];
        // First match: fijo vs first rotante (or last, alternating)
        if (r % 2 === 0) {
            jornada.push({ local: fijo, visitante: rotantes[0] });
        } else {
            jornada.push({ local: rotantes[0], visitante: fijo });
        }
        // Rest of matches
        for (var i = 1; i < n / 2; i++) {
            var local = rotantes[i];
            var visitante = rotantes[n - 1 - i];
            if (r % 2 === 0) {
                jornada.push({ local: local, visitante: visitante });
            } else {
                jornada.push({ local: visitante, visitante: local });
            }
        }
        rondas.push(jornada);

        // Rotate: keep first element (fijo) fixed, move last rotante to position 1
        var ult = rotantes.pop();
        rotantes.splice(0, 0, ult);
    }

    // First half = rondas (19 jornadas), second half = reversed home/away
    for (var r = 0; r < 19; r++) {
        var jornadaIda = rondas[r];
        var jornadaVuelta = [];
        for (var e = 0; e < jornadaIda.length; e++) {
            var p = jornadaIda[e];
            jornadaVuelta.push({ local: p.visitante, visitante: p.local });
        }
        // Second half: mirror of first half with home/away swapped (same order)
        var diaIda = asignarDiaPartido();
        var diaVuelta = asignarDiaPartido();

        jornadaIda.forEach(function (m) {
            calendarioLiga.push({
                jornada: r + 1,
                local: m.local,
                visitante: m.visitante,
                dia: diaIda,
                jugado: false,
                resultado: null
            });
        });

        jornadaVuelta.forEach(function (m) {
            calendarioLiga.push({
                jornada: r + 20,
                local: m.local,
                visitante: m.visitante,
                dia: diaVuelta,
                jugado: false,
                resultado: null
            });
        });
    }
}

function renderizarCalendario() {
    var contenedor = document.getElementById("lista-partidos-calendario");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (calendarioLiga.length === 0 || !equipoSeleccionado) return;

    var nombreUsr = equipoSeleccionado.nombre;

    // Filter only matches involving the user's team
    var misPartidos = calendarioLiga.filter(function (p) {
        return p.local.nombre === nombreUsr || p.visitante.nombre === nombreUsr;
    });

    misPartidos.sort(function (a, b) { return a.jornada - b.jornada; });

    if (misPartidos.length === 0) {
        contenedor.innerHTML = '<p style="color:#888;font-size:13px;padding:20px;text-align:center">No hay partidos programados.</p>';
        return;
    }

    misPartidos.forEach(function (p) {
        var esLocal = p.local.nombre === nombreUsr;
        var rival = esLocal ? p.visitante : p.local;
        var marcadoJugado = p.jornada < jornadaActual;

        var fila = document.createElement("div");
        fila.className = "partido-cal-row" + (marcadoJugado ? " jugado" : "");

        var miEscudo = "";
        var miArr = laLigaClasificacion.find(function (e) { return e.nombre === nombreUsr; });
        if (miArr) miEscudo = miArr.escudo;
        var rivalEscudo = rival.escudo || "img/clubes/429.jpg";

        var izq = document.createElement("div");
        izq.className = "partido-cal-izq";
        izq.innerHTML =
            '<img class="partido-cal-logo" src="img/ligas/primera-division-ea.png" alt="Liga" onerror="this.style.display=\'none\'">' +
            '<span class="partido-cal-icono">' + (esLocal ? "🏠" : "✈️") + "</span>" +
            '<div class="partido-cal-equipos">' +
                '<img class="partido-cal-escudo" src="' + miEscudo + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'">' +
                '<span class="partido-cal-vs">vs</span>' +
                '<img class="partido-cal-escudo" src="' + rivalEscudo + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'">' +
                '<span class="partido-cal-nombre">' + rival.nombre + "</span>" +
            "</div>";

        var dcha = document.createElement("div");
        dcha.className = "partido-cal-dcha";
        dcha.innerHTML =
            '<span class="partido-cal-jornada">Jornada ' + p.jornada + ' - ' + p.dia + '</span>' +
            (marcadoJugado && p.resultado ? '<span class="partido-cal-resultado">' + p.resultado + '</span>' : '<span class="partido-cal-por-jugar">Por jugar</span>');

        fila.appendChild(izq);
        fila.appendChild(dcha);
        contenedor.appendChild(fila);
    });
}

let laLigaClasificacion = [
    { id: 1, nombre: "Athletic Club", capacidadEstadio: 53000, escudo: "https://cdn.resfu.com/img_data/equipos/347.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 2, nombre: "Atlético de Madrid", capacidadEstadio: 70000, escudo: "https://cdn.resfu.com/img_data/equipos/369.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 3, nombre: "Celta", capacidadEstadio: 29000, escudo: "https://cdn.resfu.com/img_data/equipos/712.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 4, nombre: "Deportivo Alavés", capacidadEstadio: 20000, escudo: "https://cdn.resfu.com/img_data/equipos/137.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 5, nombre: "Elche", capacidadEstadio: 33000, escudo: "https://cdn.resfu.com/img_data/equipos/975.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 6, nombre: "Espanyol", capacidadEstadio: 40000, escudo: "https://cdn.resfu.com/img_data/equipos/998.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 7, nombre: "FC Barcelona", capacidadEstadio: 95000, escudo: "https://cdn.resfu.com/img_data/equipos/429.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 8, nombre: "Getafe", capacidadEstadio: 16500, escudo: "https://cdn.resfu.com/img_data/equipos/1217.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 9, nombre: "Girona", capacidadEstadio: 15000, escudo: "https://cdn.resfu.com/img_data/equipos/1236.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 10, nombre: "Levante", capacidadEstadio: 26000, escudo: "https://cdn.resfu.com/img_data/equipos/1547.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 11, nombre: "Mallorca", capacidadEstadio: 23000, escudo: "https://cdn.resfu.com/img_data/equipos/1623.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 12, nombre: "Osasuna", capacidadEstadio: 24000, escudo: "https://cdn.resfu.com/img_data/equipos/1887.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 13, nombre: "Rayo Vallecano", capacidadEstadio: 15000, escudo: "https://cdn.resfu.com/img_data/equipos/2080.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 14, nombre: "Real Betis", capacidadEstadio: 61000, escudo: "https://cdn.resfu.com/img_data/equipos/486.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 15, nombre: "Real Madrid", capacidadEstadio: 85000, escudo: "https://cdn.resfu.com/img_data/equipos/2107.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 16, nombre: "Real Oviedo", capacidadEstadio: 30000, escudo: "https://cdn.resfu.com/img_data/equipos/2115.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 17, nombre: "Real Sociedad", capacidadEstadio: 40000, escudo: "https://cdn.resfu.com/img_data/equipos/2120.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 18, nombre: "Sevilla", capacidadEstadio: 44000, escudo: "https://cdn.resfu.com/img_data/equipos/1102.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 19, nombre: "Valencia", capacidadEstadio: 55000, escudo: "https://cdn.resfu.com/img_data/equipos/2647.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 },
    { id: 20, nombre: "Villarreal", capacidadEstadio: 25000, escudo: "https://cdn.resfu.com/img_data/equipos/2716.png?size=60x&lossy=1", pts: 0, pj: 0, pg: 0, pe: 0, pp: 0, gf: 0, gc: 0, dg: 0 }
];

laLigaClasificacion.sort(function (a, b) { return a.nombre.localeCompare(b.nombre); });

function inicializarClasificacion() {
    renderizarClasificacion();
}

function actualizarYOrdenarClasificacion() {
    laLigaClasificacion.sort(function (a, b) {
        if (b.pts !== a.pts) return b.pts - a.pts;
        return b.dg - a.dg;
    });
    renderizarClasificacion();
}

function renderizarClasificacion() {
    var tbody = document.getElementById("cuerpo-clasificacion");
    if (!tbody) return;

    tbody.innerHTML = "";

    laLigaClasificacion.forEach(function (equipo, index) {
        var tr = document.createElement("tr");
        var pos = index + 1;

        var miEquipo = equipoSeleccionado && (equipo.nombre === equipoSeleccionado.nombre || equipo.id === equipoSeleccionado.id);
        if (miEquipo) tr.className = "fila-destacada";

        var tdPos = document.createElement("td");
        tdPos.innerText = pos;

        var tdEquipo = document.createElement("td");
        tdEquipo.className = "td-equipo";
        tdEquipo.style.cursor = "pointer";
        tdEquipo.innerHTML = '<img class="escudo-clasif" src="' + (equipo.escudo || "") + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'"> ' + equipo.nombre;
        tdEquipo.onclick = function (e) {
            e.stopPropagation();
            abrirPlantillaRival(equipo.nombre);
        };

        var tdPts = document.createElement("td");
        tdPts.innerText = equipo.pts;

        var tdPj = document.createElement("td");
        tdPj.innerText = equipo.pj;
        var tdPg = document.createElement("td");
        tdPg.innerText = equipo.pg;
        var tdPe = document.createElement("td");
        tdPe.innerText = equipo.pe;
        var tdPp = document.createElement("td");
        tdPp.innerText = equipo.pp;
        var tdGf = document.createElement("td");
        tdGf.innerText = equipo.gf;
        var tdGc = document.createElement("td");
        tdGc.innerText = equipo.gc;
        var tdDg = document.createElement("td");
        tdDg.innerText = equipo.dg;

        tr.appendChild(tdPos);
        tr.appendChild(tdEquipo);
        tr.appendChild(tdPts);
        tr.appendChild(tdPj);
        tr.appendChild(tdPg);
        tr.appendChild(tdPe);
        tr.appendChild(tdPp);
        tr.appendChild(tdGf);
        tr.appendChild(tdGc);
        tr.appendChild(tdDg);

        tbody.appendChild(tr);
    });
}

function renderizarEconomia() {
    var el = document.getElementById("eco-presupuesto");
    if (el) el.innerText = presupuestoFichajes.toLocaleString("es-ES") + "€";

    var hist = document.getElementById("eco-historial");
    if (!hist) return;
    hist.innerHTML = "";
    if (historialEconomia.length === 0) {
        hist.innerHTML = '<p style="color:#888;font-size:12px;padding:10px;text-align:center">Sin ingresos por taquilla aún.</p>';
        return;
    }
    historialEconomia.forEach(function (entry) {
        var div = document.createElement("div");
        div.className = "eco-entry";
        div.innerText = entry;
        hist.appendChild(div);
    });
}

function renderizarEstadio() {
    var maxEl = document.getElementById("estadio-ingreso-max");
    var cont = document.getElementById("estadio-zonas");
    if (!cont || !maxEl) return;

    var ingresoMax = 0;
    for (var k in estadioZonas) {
        var z = estadioZonas[k];
        ingresoMax += z.asientos * z.precio;
    }
    maxEl.innerText = ingresoMax.toLocaleString("es-ES") + "€";

    cont.innerHTML = "";
    for (var key in estadioZonas) {
        var z = estadioZonas[key];
        var costeAmpliar = 2000000;
        var puedeAmpliar = presupuestoFichajes >= costeAmpliar;

        var card = document.createElement("div");
        card.className = "estadio-zona-card";
        card.innerHTML =
            '<div class="estadio-zona-header">' +
                '<span class="estadio-zona-nombre">' + z.icono + ' ' + z.nombre + '</span>' +
            '</div>' +
            '<div class="estadio-zona-control">' +
                '<span style="font-size:11px;color:#888;flex:1">Asientos:</span>' +
                '<span class="estadio-zona-valor">' + z.asientos.toLocaleString("es-ES") + '</span>' +
                '<button class="btn-circ" onclick="ampliarZona(\'' + key + '\')" ' + (puedeAmpliar ? "" : "disabled") + ' title="+500 as. (2M€)" style="font-size:9px">+500</button>' +
            '</div>' +
            '<div class="estadio-zona-control">' +
                '<span style="font-size:11px;color:#888;flex:1">Precio:</span>' +
                '<button class="btn-circ" onclick="modificarPrecioZona(\'' + key + '\', -5)">−</button>' +
                '<span class="estadio-zona-valor">' + z.precio + '€</span>' +
                '<button class="btn-circ" onclick="modificarPrecioZona(\'' + key + '\', 5)">+</button>' +
            '</div>';
        cont.appendChild(card);
    }
}

function modificarPrecioZona(zonaKey, delta) {
    var z = estadioZonas[zonaKey];
    if (!z) return;
    z.precio = Math.max(5, z.precio + delta);
    renderizarEstadio();
}

function ampliarZona(zonaKey) {
    var coste = 2000000;
    if (presupuestoFichajes < coste) { alert("Presupuesto insuficiente"); return; }
    presupuestoFichajes -= coste;
    estadioZonas[zonaKey].asientos += 500;
    renderizarEstadio();
}

function cargarMercadoJugadores() {
    if (Object.keys(mercadoTodasLasPlantillas).length > 0) return;

    for (var i = 0; i < laLigaClasificacion.length; i++) {
        var clasif = laLigaClasificacion[i];
        (function (nombreEq) {
            // Try loading from the team data in baseDeDatosMundo
            var equipoReal = buscarEquipoPorNombre(nombreEq);
            if (equipoReal) {
                cargarPlantillaEquipo(equipoReal, function (plantilla) {
                    mercadoTodasLasPlantillas[nombreEq] = plantilla || [];
                });
            } else {
                // Fallback: use generic plantilla
                var pGen = crearPlantillaGenerica(24);
                mercadoTodasLasPlantillas[nombreEq] = pGen;
            }
        })(clasif.nombre);
    }
}

function abrirDetalleMercado(jugador, equipoOrigen) {
    window.jugadorMercadoActual = jugador;
    window.jugadorMercadoEquipo = equipoOrigen;
    mostrarDetalleJugador(jugador);
}

function filtrarMercado() {
    var input = document.getElementById("buscador-jugadores");
    var contenedor = document.getElementById("resultados-mercado");
    if (!input || !contenedor) return;

    var texto = input.value.trim().toLowerCase();
    contenedor.innerHTML = "";

    if (texto.length < 2) {
        contenedor.innerHTML = '<p style="color:#888;font-size:12px;padding:20px;text-align:center">Escribe al menos 2 caracteres para buscar.</p>';
        return;
    }

    var nombreUsr = equipoSeleccionado ? equipoSeleccionado.nombre : "";
    var equiposCargados = 0;
    for (var eq in mercadoTodasLasPlantillas) {
        if (mercadoTodasLasPlantillas[eq]) equiposCargados++;
    }

    if (equiposCargados < 2) {
        contenedor.innerHTML = '<p style="color:#888;font-size:12px;padding:20px;text-align:center">Cargando base de datos de jugadores...</p>';
        return;
    }

    var results = [];
    for (var eqNombre in mercadoTodasLasPlantillas) {
        if (eqNombre === nombreUsr) continue;
        var plantilla = mercadoTodasLasPlantillas[eqNombre];
        if (!plantilla) continue;
        for (var j = 0; j < plantilla.length; j++) {
            var jug = plantilla[j];
            if (jug.nombre && jug.nombre.toLowerCase().indexOf(texto) >= 0) {
                results.push({ jugador: jug, equipo: eqNombre });
                if (results.length >= 15) break;
            }
        }
        if (results.length >= 15) break;
    }

    if (results.length === 0) {
        contenedor.innerHTML = '<p style="color:#888;font-size:12px;padding:20px;text-align:center">No se encontraron jugadores.</p>';
        return;
    }

    // Build club logo cache
    var logosEquipos = {};
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        logosEquipos[laLigaClasificacion[i].nombre] = laLigaClasificacion[i].escudo || "";
    }

    results.forEach(function (item) {
        var jug = item.jugador;
        var fila = document.createElement("div");
        fila.className = "fila-mercado";

        // Position
        var posSpan = document.createElement("span");
        posSpan.className = "fm-pos";
        posSpan.innerText = jug.posicion || "-";

        // Nationality
        var natSpan = document.createElement("span");
        natSpan.className = "fm-nat";
        natSpan.innerText = jug.nacionalidad || "🌍";

        // Name
        var nomSpan = document.createElement("span");
        nomSpan.className = "fm-nombre";
        nomSpan.innerText = jug.nombre;

        // Club logo
        var clubSpan = document.createElement("span");
        clubSpan.className = "fm-club";
        var clubLogoUrl = logosEquipos[item.equipo] || "img/clubes/429.jpg";
        clubSpan.innerHTML = '<img src="' + clubLogoUrl + '" alt="" onerror="this.src=\'img/clubes/429.jpg\'">';

        // Age
        var edadSpan = document.createElement("span");
        edadSpan.className = "fm-edad";
        edadSpan.innerText = jug.edad != null ? String(jug.edad) : "-";

        // Value
        var valSpan = document.createElement("span");
        valSpan.className = "fm-valor";
        valSpan.innerText = jug.valor || "-";

        // Power
        var podSpan = document.createElement("span");
        podSpan.className = "fm-pod";
        podSpan.innerText = jug.poder != null ? String(jug.poder) : (jug.rating != null ? String(jug.rating) : "-");

        // Button
        var btn = document.createElement("button");
        btn.className = "btn-mercado-ver";
        btn.innerText = "Ver";
        (function (j, eq) {
            btn.onclick = function (e) {
                e.stopPropagation();
                abrirDetalleMercado(j, eq);
            };
        })(jug, item.equipo);

        fila.appendChild(posSpan);
        fila.appendChild(natSpan);
        fila.appendChild(nomSpan);
        fila.appendChild(clubSpan);
        fila.appendChild(edadSpan);
        fila.appendChild(valSpan);
        fila.appendChild(podSpan);
        fila.appendChild(btn);
        contenedor.appendChild(fila);
    });
}

function ficharJugador(jugador, equipoOrigen) {
    if (!jugador || !equipoSeleccionado) return;

    // Parse value
    var valorStr = (jugador.valor || "0").replace(/[^0-9.,]/g, "").replace(",", ".");
    var valorNum = parseFloat(valorStr);
    if (jugador.valor && jugador.valor.indexOf("M") >= 0) valorNum *= 1000000;
    else if (jugador.valor && jugador.valor.indexOf("K") >= 0) valorNum *= 1000;

    if (presupuestoFichajes < valorNum) {
        alert("Fondos insuficientes para realizar este fichaje. Necesitas " + Math.round(valorNum - presupuestoFichajes).toLocaleString("es-ES") + "€ más.");
        return;
    }

    presupuestoFichajes -= valorNum;
    var registro = "Fichaje de " + jugador.nombre + ": -" + Math.round(valorNum).toLocaleString("es-ES") + "€";
    historialEconomia.unshift(registro);

    // Remove from source team
    var srcPlantilla = mercadoTodasLasPlantillas[equipoOrigen];
    if (srcPlantilla) {
        for (var i = 0; i < srcPlantilla.length; i++) {
            if (srcPlantilla[i].id === jugador.id || srcPlantilla[i].nombre === jugador.nombre) {
                srcPlantilla.splice(i, 1);
                break;
            }
        }
    }

    // Add to user's team
    plantillaActual.push(jugador);

    // Also update the user's team data file's in-memory plantilla
    var eqUsuario = buscarEquipoPorNombre(equipoSeleccionado.nombre);
    if (eqUsuario && eqUsuario.plantilla) {
        eqUsuario.plantilla.push(jugador);
    }

    alert(jugador.nombre + " fichado correctamente por " + Math.round(valorNum).toLocaleString("es-ES") + "€.");
    renderizarOficina();
    document.getElementById("buscador-jugadores").value = "";
    filtrarMercado();
}

function buscarEquipoPorNombre(nombre) {
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        if (laLigaClasificacion[i].nombre === nombre) return laLigaClasificacion[i];
    }
    // Also search in baseDeDatosMundo
    for (var c in baseDeDatosMundo) {
        var paises = baseDeDatosMundo[c];
        for (var p in paises) {
            var ligas = paises[p];
            for (var l in ligas) {
                var equipos = ligas[l].equipos || [];
                for (var e = 0; e < equipos.length; e++) {
                    if (equipos[e].nombre === nombre) return equipos[e];
                }
            }
        }
    }
    return null;
}

function abreviarPosicion(posicion) {
    if (posicion === "PO" || posicion === "Portero") return "POR";
    if (posicion === "LD" || posicion === "Lateral Derecho") return "LD";
    if (posicion === "LI" || posicion === "Lateral Izquierdo") return "LI";
    if (posicion === "LI" || posicion === "Carrilero Izquierdo") return "CAI";
    if (posicion === "LI" || posicion === "Carrilero Derecho") return "CAD";
    if (posicion === "DC" || posicion === "Defensa Central") return "DFC";
    if (posicion === "MED" || posicion === "Centrocampista Defensivo") return "MCD";
    if (posicion === "MED" || posicion === "Centrocampista") return "MC";
    if (posicion === "MED" || posicion === "Centrocampista Ofensivo") return "MCO";
    if (posicion === "MED" || posicion === "Centrocampista Izquierdo") return "MI";
    if (posicion === "MED" || posicion === "Centrocampista Derecho") return "MD";
    if (posicion === "DEL" || posicion === "Extremo Izquierdo") return "EI";
    if (posicion === "DEL" || posicion === "Extremo Derecho") return "ED";
    if (posicion === "DEL" || posicion === "Delantero Centro") return "DC";
    return "N/A";
}

// ==========================================================================
// 3. FUNCIONES DE CONTROL DE PANTALLAS Y UI
// ==========================================================================

// Función central para cambiar de pantalla de forma limpia
function mostrarPantalla(idPantalla) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

// Se activa al pulsar "Nueva Partida" en el menú principal
function irAContinentes() {
    mostrarPantalla("pantalla-crear-manager");
}

function abrirPantallaCargarPartidas() {
    renderizarSlotsCargar();
    mostrarPantalla("pantalla-cargar-partidas");
}

function abrirPantallaTactica() {
    if (!equipoSeleccionado) {
        alert("Selecciona un equipo antes de abrir la táctica.");
        return;
    }

    cerrarMenuLateral();
    mostrarPantalla("pantalla-tactica");

    let selectFormacion = document.getElementById("select-formacion");
    if (selectFormacion) {
        selectFormacion.value = tacticaGuardada.formacion || "4-3-3";
    }

    actualizarBloquePartidoTactica();
    renderizarTactica();
}

function guardarTacticaActual() {
    let selectFormacion = document.getElementById("select-formacion");
    let titulares = tacticaGuardada.titulares.slice();
    let sustitutos = tacticaGuardada.sustitutos.slice();

    // Read from DOM to ensure fresh state
    document.querySelectorAll("#nodos-campo .nodo-campo").forEach(function (nodo, idx) {
        if (idx < 11) {
            let id = nodo.dataset.jugadorId;
            titulares[idx] = id ? Number(id) : null;
        }
    });

    document.querySelectorAll("#cuadricula-sustitutos .ficha-sup").forEach(function (ficha, idx) {
        if (idx < 12) {
            let id = ficha.dataset.jugadorId;
            sustitutos[idx] = id ? Number(id) : null;
        }
    });

    tacticaGuardada = {
        formacion: selectFormacion ? selectFormacion.value : "4-3-3",
        titulares: titulares,
        sustitutos: sustitutos
    };
}

function restaurarTacticaGuardada() {
    renderizarTactica();
}

function volverAOficina() {
    guardarTacticaActual();
    mostrarPantalla("pantalla-oficina");
}

// Se activa al pulsar "Continuar" en el formulario del manager
function guardarManager() {
    let inputNombre = document.getElementById("input-nombre").value.trim();
    let selectNacionalidad = document.getElementById("select-nacionalidad").value;
    
    // Validación de seguridad para que no dejen el nombre vacío
    if (inputNombre === "") {
        alert("Por favor, introduce tu nombre de manager.");
        return;
    }

    // Validación para forzar que se seleccione una nacionalidad
    if (selectNacionalidad === "") {
        alert("Por favor, selecciona tu nacionalidad.");
        return;
    }

    // Validación para evitar valores inválidos/manipulados en el select
    let nacionalidadValida = nacionalidadesConBandera.some(item => item.nombre === selectNacionalidad);
    if (!nacionalidadValida) {
        alert("La nacionalidad seleccionada no es válida.");
        return;
    }
    
    // Guardamos los datos del manager
    nombreManager = inputNombre;
    nacionalidadManager = selectNacionalidad;
    
    // Pasamos a elegir destino geográfico
    mostrarPantalla("pantalla-continentes");
}

// Se activa al pulsar "Seleccionar" en cualquier tarjeta de continente
function seleccionarContinente(nombreContinente) {
    continenteSeleccionado = nombreContinente;
    
    document.getElementById("titulo-paises").innerText = "Países de " + nombreContinente;
    
    let contenedorPaises = document.getElementById("lista-paises");
    contenedorPaises.innerHTML = "";
    
    if (!baseDeDatosMundo[nombreContinente]) {
        alert("Próximamente añadiremos ligas en este continente.");
        return;
    }
    
    let paises = Object.keys(baseDeDatosMundo[nombreContinente]);
    
    paises.forEach(pais => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-pais";
        tarjeta.onclick = function() { seleccionarPais(pais); };

        let bandera = document.createElement("span");
        bandera.className = "bandera-pais";
        bandera.innerText = obtenerBanderaPais(pais);

        let nombre = document.createElement("span");
        nombre.className = "nombre-pais";
        nombre.innerText = pais;

        tarjeta.appendChild(bandera);
        tarjeta.appendChild(nombre);
        contenedorPaises.appendChild(tarjeta);
    });
    
    mostrarPantalla("pantalla-paises");
}

function obtenerBanderaPais(pais) {
    var banderas = {
        "España": "🇪🇸", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Italia": "🇮🇹",
        "Alemania": "🇩🇪", "Francia": "🇫🇷", "Portugal": "🇵🇹",
        "México": "🇲🇽", "Estados Unidos": "🇺🇸",
        "Argentina": "🇦🇷", "Brasil": "🇧🇷",
        "Marruecos": "🇲🇦", "Egipto": "🇪🇬", "Sudáfrica": "🇿🇦",
        "Japón": "🇯🇵", "Arabia Saudí": "🇸🇦",
        "Australia": "🇦🇺"
    };
    return banderas[pais] || "🌍";
}

function seleccionarPais(nombrePais) {
    paisSeleccionado = nombrePais;
    
    document.getElementById("titulo-ligas").innerText = "Ligas de " + nombrePais;
    
    let contenedorLigas = document.getElementById("lista-ligas");
    contenedorLigas.innerHTML = "";
    
    let ligas = baseDeDatosMundo[continenteSeleccionado][nombrePais];
    
    Object.keys(ligas).forEach(liga => {
        let tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-liga";
        tarjeta.onclick = function() {
            seleccionarLiga(liga);
        };

        var logoUrl = "img/ligas/default.png";
        if (liga.indexOf("LaLiga EA Sports") !== -1) logoUrl = "img/ligas/primera-division-ea.png";
        else if (liga.indexOf("Hypermotion") !== -1) logoUrl = "img/ligas/segunda-division-hypermotion.png";
        else if (liga.indexOf("Premier") !== -1) logoUrl = "img/ligas/premier-league.png";
        else if (liga.indexOf("Serie") !== -1) logoUrl = "img/ligas/serie-a.png";
        else if (liga.indexOf("Bundesliga") !== -1) logoUrl = "img/ligas/bundesliga.png";
        else if (liga.indexOf("Liga MX") !== -1) logoUrl = "img/ligas/liga-mx.png";
        else if (liga.indexOf("MLS") !== -1) logoUrl = "img/ligas/mls.png";
        else if (liga.indexOf("Brasileir") !== -1) logoUrl = "img/ligas/brasileirao.png";
        else if (liga.indexOf("Liga Profesional") !== -1) logoUrl = "img/ligas/liga-profesional.png";
        else if (liga.indexOf("J1") !== -1) logoUrl = "img/ligas/j1-league.png";
        else if (liga.indexOf("A-League") !== -1) logoUrl = "img/ligas/a-league.png";
        else logoUrl = "img/ligas/default.png";

        var logo = document.createElement("img");
        logo.className = "logo-liga";
        logo.src = logoUrl;
        logo.alt = liga;
        logo.onerror = function() { this.src = "img/ligas/default.png"; };

        var nombre = document.createElement("span");
        nombre.className = "nombre-liga";
        nombre.innerText = liga;

        tarjeta.appendChild(logo);
        tarjeta.appendChild(nombre);
        contenedorLigas.appendChild(tarjeta);
    });
    
    mostrarPantalla("pantalla-ligas");
}

// Se activa al pulsar sobre una liga y renderiza sus equipos
function seleccionarLiga(nombreLiga) {
    let pantallaEquipos = document.getElementById("pantalla-equipos");
    let tituloEquipos = pantallaEquipos ? pantallaEquipos.querySelector("h1") : null;
    let contenedorEquipos = document.getElementById("lista-equipos-vertical");
    let btnConfirmarEquipo = document.getElementById("btn-confirmar-equipo");

    if (!tituloEquipos || !contenedorEquipos || !btnConfirmarEquipo) {
        alert("No se encontró la pantalla de equipos.");
        return;
    }

    tituloEquipos.innerText = "Selecciona Equipo";
    contenedorEquipos.innerHTML = "";
    equipoSeleccionado = null;
    ligaSeleccionadaActual = nombreLiga;
    btnConfirmarEquipo.disabled = true;
    btnConfirmarEquipo.onclick = null;

    let datosPais = baseDeDatosMundo[continenteSeleccionado][paisSeleccionado] || {};
    let datosLiga = datosPais[nombreLiga];
    let clubes = (datosLiga && datosLiga.equipos) ? datosLiga.equipos : [];
    let clubesOrdenados = [...clubes].sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    );

    if (clubesOrdenados.length === 0) {
        let aviso = document.createElement("p");
        aviso.innerText = "Próximamente añadiremos equipos para esta liga.";
        contenedorEquipos.appendChild(aviso);
        mostrarPantalla("pantalla-equipos");
        return;
    }

    clubesOrdenados.forEach(club => {
        let filaEquipo = document.createElement("div");
        filaEquipo.className = "fila-equipo";

        let cajaLogo = document.createElement("div");
        cajaLogo.className = "logo-club";

        let logo = document.createElement("img");
        var datosClub = laLigaClasificacion.find(function (e) { return e.nombre === club.nombre || e.id === club.id; });
        logo.src = (datosClub && datosClub.escudo) || club.logo;
        logo.alt = "Escudo de " + club.nombre;
        cajaLogo.appendChild(logo);

        let nombreClub = document.createElement("h2");
        nombreClub.className = "nombre-equipo";
        nombreClub.innerText = club.nombre;

        let jugadoresClub = document.createElement("span");
        jugadoresClub.className = "dato-equipo jugadores-equipo";
        jugadoresClub.innerText = (club.jugadores || "N/D") + " jug.";

        let valoracionClub = document.createElement("span");
        valoracionClub.className = "dato-equipo valoracion-equipo";
        valoracionClub.innerText = "Valoración: " + (club.valoracion || "N/D");

        let botonera = document.createElement("div");
        botonera.className = "card-botones";

        let btnVerPlantilla = document.createElement("button");
        btnVerPlantilla.className = "btn-ver-plantilla";
        btnVerPlantilla.innerText = "Ver Plantilla";
        btnVerPlantilla.onclick = function (event) {
            event.stopPropagation();
            abrirModalPlantilla(club);
        };

        let btnSeleccionar = document.createElement("button");
        btnSeleccionar.className = "btn-seleccionar-equipo";
        btnSeleccionar.innerText = "Seleccionar";
        btnSeleccionar.onclick = function (event) {
            event.stopPropagation();
            contenedorEquipos.querySelectorAll(".fila-equipo").forEach(fila => {
                fila.classList.remove("fila-seleccionada");
            });
            filaEquipo.classList.add("fila-seleccionada");
            equipoSeleccionado = club;
            btnConfirmarEquipo.disabled = false;
        };

        botonera.appendChild(btnVerPlantilla);
        botonera.appendChild(btnSeleccionar);

        filaEquipo.onclick = function () {
            contenedorEquipos.querySelectorAll(".fila-equipo").forEach(fila => {
                fila.classList.remove("fila-seleccionada");
            });
            filaEquipo.classList.add("fila-seleccionada");
            equipoSeleccionado = club;
            btnConfirmarEquipo.disabled = false;
        };

        filaEquipo.appendChild(cajaLogo);
        filaEquipo.appendChild(nombreClub);
        filaEquipo.appendChild(jugadoresClub);
        filaEquipo.appendChild(valoracionClub);
        filaEquipo.appendChild(botonera);
        contenedorEquipos.appendChild(filaEquipo);
    });

    btnConfirmarEquipo.onclick = function () {
        if (!equipoSeleccionado) {
            alert("Selecciona un equipo para continuar.");
            return;
        }

        cargarYMostrarOficina(equipoSeleccionado);
    };

    mostrarPantalla("pantalla-equipos");
}

function obtenerProximoRival() {
    if (!equipoSeleccionado) {
        return { nombre: "Rival pendiente", logo: "", esLocal: true };
    }

    var nombreUsr = equipoSeleccionado.nombre;
    if (calendarioLiga.length > 0) {
        var prox = null;
        for (var i = 0; i < calendarioLiga.length; i++) {
            var p = calendarioLiga[i];
            if (p.jornada === jornadaActual && (p.local.nombre === nombreUsr || p.visitante.nombre === nombreUsr)) {
                prox = p;
                break;
            }
        }
        if (prox) {
            var esLocal = prox.local.nombre === nombreUsr;
            var rival = esLocal ? prox.visitante : prox.local;
            console.log("DEBUG obtenerProximoRival: jornada=" + jornadaActual + " esLocal=" + esLocal + " rival=" + rival.nombre);
            return {
                nombre: rival.nombre,
                logo: rival.escudo || equipoSeleccionado.logo,
                esLocal: esLocal
            };
        }
    }

    console.log("DEBUG obtenerProximoRival: USANDO FALLBACK - jornadaActual=" + jornadaActual + " calendarioLiga.length=" + calendarioLiga.length);
    return { nombre: "Rival pendiente", logo: equipoSeleccionado.logo, esLocal: true };
}

function renderizarOficina() {
    if (!equipoSeleccionado) return;

    cambiarPantalla("inicio");
    posicionarMenuEnBarraSuperior();
    inicializarCabeceraOficina();

    let logoClub = document.getElementById("oficina-logo-club");
    let nombreClub = document.getElementById("oficina-nombre-club");
    let posicion = document.getElementById("oficina-posicion");
    let jornada = document.getElementById("oficina-jornada");
    let logoLocal = document.getElementById("oficina-logo-local");
    let logoVisitante = document.getElementById("oficina-logo-visitante");
    let diaPartido = document.getElementById("oficina-dia-partido");
    let textoConfianza = document.getElementById("texto-confianza");
    let barraConfianza = document.getElementById("barra-confianza-fill");
    let listaJugadores = document.getElementById("lista-jugadores-oficina");

    let proximoRival = obtenerProximoRival();
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

    var datosMiEquipo = laLigaClasificacion.find(function (e) {
        return e.id === equipoSeleccionado.id || e.nombre === equipoSeleccionado.nombre;
    });
    var datosRival = laLigaClasificacion.find(function (e) {
        return e.nombre === proximoRival.nombre;
    });

    logoClub.src = (datosMiEquipo && datosMiEquipo.escudo) || equipoSeleccionado.logo;
    nombreClub.innerText = equipoSeleccionado.nombre;
    posicion.innerText = "Posición: " + posicionActual + "º";
    jornada.innerText = "Jornada " + jornadaActual;

    var escudoLocal = (datosMiEquipo && datosMiEquipo.escudo) || equipoSeleccionado.logo || "img/clubes/429.jpg";
    var escudoVisitante = (datosRival && datosRival.escudo) || proximoRival.logo || equipoSeleccionado.logo || "img/clubes/429.jpg";

    console.log("DEBUG renderizarOficina: esLocal=" + proximoRival.esLocal + " rival=" + proximoRival.nombre);

    if (proximoRival.esLocal) {
        logoLocal.src = escudoLocal;
        logoVisitante.src = escudoVisitante;
    } else {
        logoLocal.src = escudoVisitante;
        logoVisitante.src = escudoLocal;
    }
    logoLocal.onerror = function () { this.onerror = null; this.src = "img/clubes/429.jpg"; };
    logoVisitante.onerror = function () { this.onerror = null; this.src = "img/clubes/429.jpg"; };
    diaPartido.innerText = dias[jornadaActual % dias.length];

    textoConfianza.innerText = "Confianza de la directiva: " + confianzaDirectiva + "%";
    barraConfianza.style.width = confianzaDirectiva + "%";
    actualizarTextoBotonGuardar();

    

listaJugadores.innerHTML = "";
    plantillaActual.forEach(jugador => {
        let item = document.createElement("li");
        item.className = "fila-jugador";

        // Contenedor vertical para agrupar posición y pierna
        let bloquePosicion = document.createElement("div");
        bloquePosicion.className = "bloque-posicion-oficina";

        let posicionJugador = document.createElement("span");
        
        // --- LÓGICA DE DETECCIÓN DE POSICIÓN, TEXTO Y COLOR ---
        let posOriginal = jugador.posicion ? jugador.posicion.toLowerCase() : "";
        let textoPosicion = "N/A";
        let colorClase = "pos-desconocido"; // Por si acaso

        if (posOriginal.includes("portero") || posOriginal === "por" || posOriginal === "po") {
            textoPosicion = "PO";
            colorClase = "pos-portero"; // AZUL
        } 
        // DEFENSAS (Rojo): Central, Lateral, Carrilero, Defensa
        else if (posOriginal.includes("defensa") || posOriginal.includes("central") || posOriginal.includes("lateral") || posOriginal.includes("carrilero") || posOriginal === "df" || posOriginal === "dfc" || posOriginal === "ld" || posOriginal === "li") {
            textoPosicion = "DF";
            if (posOriginal.includes("central")) textoPosicion = "DFC";
            if (posOriginal.includes("lateral derecho") || posOriginal === "ld") textoPosicion = "LD";
            if (posOriginal.includes("lateral izquierdo") || posOriginal === "li") textoPosicion = "LI";
            if (posOriginal.includes("carrilero")) textoPosicion = "CR";
            colorClase = "pos-defensa"; // ROJO
        } 
        // CENTROCAMPISTAS (Amarillo): MCD, MCO, MC, MI, MD, Volante
        else if (posOriginal.includes("centrocampista") || posOriginal.includes("medio") || posOriginal.includes("pivote") || posOriginal.includes("volante") || posOriginal === "mc" || posOriginal === "mcd" || posOriginal === "mco" || posOriginal === "mi" || posOriginal === "md") {
            textoPosicion = "MC";
            if (posOriginal.includes("defensivo") || posOriginal === "mcd") textoPosicion = "MCD";
            if (posOriginal.includes("ofensivo") || posOriginal === "mco") textoPosicion = "MCO";
            if (posOriginal.includes("izquierdo") || posOriginal === "mi") textoPosicion = "MI";
            if (posOriginal.includes("derecho") || posOriginal === "md") textoPosicion = "MD";
            colorClase = "pos-mediocentro"; // AMARILLO
        } 
        // DELANTEROS (Verde): Delantero centro, Extremo, Segundo delantero, Punta
        else if (posOriginal.includes("delantero") || posOriginal.includes("extremo") || posOriginal.includes("punta") || posOriginal === "dc" || posOriginal === "ei" || posOriginal === "ed") {
            textoPosicion = "DC";
            if (posOriginal.includes("extremo izquierdo") || posOriginal === "ei") textoPosicion = "EI";
            if (posOriginal.includes("extremo derecho") || posOriginal === "ed") textoPosicion = "ED";
            colorClase = "pos-delantero"; // VERDE
        }

        posicionJugador.className = "posicion-jugador " + colorClase;
        posicionJugador.innerText = textoPosicion;

        // --- LÓGICA DE LA PIERNA BUENA ---
        let pieJugador = document.createElement("span");
        pieJugador.className = "pie-jugador-bajo-posicion";
        
        let piernaOriginal = jugador.pierna ? jugador.pierna.toLowerCase() : "";
        let textoPie = "-";

        if (piernaOriginal.includes("diestro") || piernaOriginal.includes("der") || piernaOriginal === "d") {
            textoPie = "der";
        } else if (piernaOriginal.includes("zurdo") || piernaOriginal.includes("izq") || piernaOriginal === "i") {
            textoPie = "izq";
        } else if (piernaOriginal.includes("ambos") || piernaOriginal.includes("amb") || piernaOriginal === "a") {
            textoPie = "amb";
        }
        
        pieJugador.innerText = textoPie;

        // Metemos ambos en el bloque vertical
        bloquePosicion.appendChild(posicionJugador);
        bloquePosicion.appendChild(pieJugador);

        // --- RESTO DE DATOS DE LA FILA ---
        let nacionalidadJugador = document.createElement("span");
        nacionalidadJugador.className = "nacionalidad-jugador-oficina";
        nacionalidadJugador.innerText = jugador.nacionalidad || "🌍";

        let nombreJugador = document.createElement("span");
        nombreJugador.className = "nombre-jugador-oficina";

        let textoNombreJugador = document.createElement("span");
        textoNombreJugador.className = "nombre-jugador-texto";
        textoNombreJugador.innerText = jugador.nombre;
        nombreJugador.appendChild(textoNombreJugador);

        let estaEnTransferibles = Array.isArray(window.listaTransferibles) && window.listaTransferibles.includes(jugador.nombre);
        let estaEnCedibles = Array.isArray(window.listaCedibles) && window.listaCedibles.includes(jugador.nombre);

        if (estaEnTransferibles) {
            let tagTransferible = document.createElement("span");
            tagTransferible.className = "tag-lt";
            tagTransferible.innerText = "LT";
            nombreJugador.appendChild(tagTransferible);
        }

        if (estaEnCedibles) {
            let tagCedible = document.createElement("span");
            tagCedible.className = "tag-lc";
            tagCedible.innerText = "LC";
            nombreJugador.appendChild(tagCedible);
        }

        nombreJugador.onclick = function () {
            mostrarDetalleJugador(jugador);
        };

        let edadJugador = document.createElement("span");
        edadJugador.className = "edad-jugador-oficina";
        edadJugador.innerText = jugador.edad ? String(jugador.edad) : "-";

        let valorJugador = document.createElement("span");
        valorJugador.className = "valor-jugador-oficina";
        valorJugador.innerText = jugador.valor || "-";

        let salarioJugador = document.createElement("span");
        salarioJugador.className = "salario-jugador-oficina";
        salarioJugador.innerText = jugador.salario || "-";

        let poderJugador = document.createElement("span");
        poderJugador.className = "poder-jugador-oficina";
        poderJugador.innerText = (typeof jugador.poder === "number") ? String(jugador.poder) : "-";

        // Añadimos todo al elemento de la lista
        item.appendChild(bloquePosicion);
        item.appendChild(nacionalidadJugador);
        item.appendChild(nombreJugador);
        item.appendChild(edadJugador);
        item.appendChild(valorJugador);
        item.appendChild(poderJugador);
        
        listaJugadores.appendChild(item);
    });
}

function actualizarTextoBotonGuardar() {
    let btnGuardar = document.getElementById("btn-guardar-partida");
    if (!btnGuardar) return;

    let ultimaFechaGuardado = localStorage.getItem("ultima_fecha_guardado");
    if (ultimaFechaGuardado) {
        btnGuardar.innerText = "💾 Guardar Partida (Último: " + ultimaFechaGuardado + ")";
        return;
    }

    btnGuardar.innerText = "💾 Guardar Partida";
}

function guardarPartida() {
    if (!nombreManager) {
        alert("No hay un nombre de manager asignado.");
        return;
    }

    let idUsuario = nombreManager.toLowerCase().replace(/\s+/g, "_");
    let timestamp = Date.now();
    let fechaLegible = new Date().toLocaleString("es-ES");

    let datosPartida = {
        idUsuario: idUsuario,
        nombreUsuario: nombreManager,
        nacionalidad: nacionalidadManager,
        equipo: equipoSeleccionado ? equipoSeleccionado.nombre : "",
        escudo: (function () {
            if (!equipoSeleccionado) return "";
            var e = laLigaClasificacion.find(function (x) { return x.nombre === equipoSeleccionado.nombre || x.id === equipoSeleccionado.id; });
            return (e && e.escudo) || equipoSeleccionado.logo || "";
        })(),
        jornadaActual: jornadaActual,
        posicion: posicionActual,
        confianza: confianzaDirectiva,
        liga: ligaSeleccionadaActual,
        continente: continenteSeleccionado,
        pais: paisSeleccionado,
        tactica: tacticaGuardada,
        calendario: calendarioLiga,
        presupuesto: presupuestoFichajes,
        historialEconomia: historialEconomia,
        estadioZonas: estadioZonas,
        mercadoTodasLasPlantillas: mercadoTodasLasPlantillas,
        entrenador: window.entrenadorUsuario || "Tú",
        fechaGuardado: timestamp,
        fecha: fechaLegible
    };

    localStorage.setItem("partida_activa_" + idUsuario, JSON.stringify(datosPartida));

    let indice = JSON.parse(localStorage.getItem("partidas_registradas") || "[]");
    indice = indice.filter(function (entry) { return entry.idUsuario !== idUsuario; });
    indice.push({ idUsuario: idUsuario, nombreUsuario: nombreManager, fechaGuardado: timestamp });
    localStorage.setItem("partidas_registradas", JSON.stringify(indice));

    localStorage.setItem("ultima_fecha_guardado", fechaLegible);
    actualizarTextoBotonGuardar();
    alert("Partida guardada correctamente.");
}

function listarPartidasGuardadas() {
    let indice = JSON.parse(localStorage.getItem("partidas_registradas") || "[]");

    let mapa = {};
    indice.forEach(function (entry) {
        let existente = mapa[entry.idUsuario];
        if (!existente || entry.fechaGuardado > existente.fechaGuardado) {
            mapa[entry.idUsuario] = entry;
        }
    });

    let limpio = Object.values(mapa).sort(function (a, b) {
        return b.fechaGuardado - a.fechaGuardado;
    });

    let slots = [];
    limpio.forEach(function (entry) {
        let raw = localStorage.getItem("partida_activa_" + entry.idUsuario);
        if (raw) {
            try {
                let datos = JSON.parse(raw);
                slots.push(datos);
            } catch (e) {}
        }
    });

    return slots;
}

function buscarEquipoEnBase(nombreEquipo) {
    for (let continente in baseDeDatosMundo) {
        let paises = baseDeDatosMundo[continente];
        for (let pais in paises) {
            let ligas = paises[pais];
            for (let liga in ligas) {
                let equipos = ligas[liga].equipos || [];
                let encontrado = equipos.find(e => e.nombre === nombreEquipo);
                if (encontrado) {
                    return {
                        equipo: encontrado,
                        continente: continente,
                        pais: pais,
                        liga: liga
                    };
                }
            }
        }
    }

    return null;
}

function renderizarSlotsCargar() {
    let contenedor = document.getElementById("lista-slots-guardados");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    let slotsGuardados = listarPartidasGuardadas();

    if (slotsGuardados.length === 0) {
        let mensaje = document.createElement("p");
        mensaje.className = "sin-slots";
        mensaje.innerText = "No hay partidas guardadas";
        contenedor.appendChild(mensaje);
        return;
    }

    slotsGuardados.forEach(function (slot) {
        let fila = document.createElement("div");
        fila.className = "slot-partida";

        let info = document.createElement("div");
        info.className = "slot-partida-info";

        var logoSlot = laLigaClasificacion.find(function (e) { return e.nombre === slot.equipo; });
        var logoSrc = (logoSlot && logoSlot.escudo) || slot.escudo || "img/clubes/429.jpg";
        let logo = document.createElement("img");
        logo.src = logoSrc;
        logo.alt = "Escudo " + slot.equipo;
        logo.onerror = function () { this.src = "img/clubes/429.jpg"; };

        let texto = document.createElement("div");
        texto.className = "slot-partida-texto";
        texto.innerHTML =
            "<strong>" + slot.equipo + "</strong><br>" +
            "Manager: " + slot.nombreUsuario + "<br>" +
            "Jornada: " + slot.jornadaActual + "<br>" +
            (slot.fecha || "");

        info.appendChild(logo);
        info.appendChild(texto);

        let btnCargar = document.createElement("button");
        btnCargar.className = "btn-cargar-slot";
        btnCargar.innerText = "Cargar ➔";
        btnCargar.onclick = function () {
            nombreManager = slot.nombreUsuario || "";
            nacionalidadManager = slot.nacionalidad || "";
            jornadaActual = slot.jornadaActual || 1;
            posicionActual = slot.posicion || 10;
            confianzaDirectiva = slot.confianza || 80;
            if (slot.tactica) {
                tacticaGuardada = slot.tactica;
            }

            let encontrado = buscarEquipoEnBase(slot.equipo);
            if (encontrado) {
                equipoSeleccionado = encontrado.equipo;
                continenteSeleccionado = slot.continente || encontrado.continente;
                paisSeleccionado = slot.pais || encontrado.pais;
                ligaSeleccionadaActual = slot.liga || encontrado.liga;
            } else {
                equipoSeleccionado = {
                    nombre: slot.equipo,
                    logo: slot.escudo,
                    jugadores: 22,
                    valoracion: 70,
                    plantilla: crearPlantillaGenerica(22)
                };
                continenteSeleccionado = slot.continente || "Europa";
                paisSeleccionado = slot.pais || "España";
                ligaSeleccionadaActual = slot.liga || "LaLiga EA Sports";
            }

            // Restore calendar, economy from save
            if (slot.calendario && slot.calendario.length > 0) {
                calendarioLiga = slot.calendario;
            }
            if (slot.presupuesto) presupuestoFichajes = slot.presupuesto;
            if (slot.historialEconomia) historialEconomia = slot.historialEconomia;
            if (slot.estadioZonas) estadioZonas = slot.estadioZonas;
            if (slot.mercadoTodasLasPlantillas) mercadoTodasLasPlantillas = slot.mercadoTodasLasPlantillas;
            if (slot.entrenador) window.entrenadorUsuario = slot.entrenador;
            else window.entrenadorUsuario = "Tú";

            cargarYMostrarOficina(equipoSeleccionado);
        };

        fila.appendChild(info);
        fila.appendChild(btnCargar);
        contenedor.appendChild(fila);
    });
}

// ==========================================================================
// 4. SISTEMA DE NODOS TÁCTICOS (click-to-assign)
// ==========================================================================

const GRUPOS_POSICION = {
    POR: ["POR"],
    DEF: ["LD", "LI", "DFC", "CAD", "CAI", "LB", "RB", "CB"],
    MED: ["MCD", "MC", "MCO", "MI", "MD", "CM", "CAM", "CDM"],
    DEL: ["DC", "ED", "EI", "ST", "LW", "RW", "CF"]
};

function grupoPosicion(pos) {
    for (let g in GRUPOS_POSICION) {
        if (GRUPOS_POSICION[g].includes(pos)) return g;
    }
    return null;
}

function calcularMediaEnPosicion(jugador, posicionDestino) {
    if (!jugador || !posicionDestino) return { media: jugador ? (jugador.poder || 0) : 0, factor: 1, estado: "natural" };

    let poderBase = jugador.poder || 0;

    // Natural position
    if (posicionDestino === jugador.posicion) {
        return { media: Math.round(poderBase), factor: 1, estado: "natural" };
    }

    // Secondary positions
    let secundarias = jugador.posicionesSecundarias || [];
    if (secundarias.includes(posicionDestino)) {
        let media = Math.round(poderBase * 0.95);
        return { media: media, factor: 0.95, estado: "secundaria" };
    }

    // Naturales (extra natural positions beyond the primary)
    let naturales = jugador.posicionesNaturales || [];
    if (naturales.includes(posicionDestino)) {
        return { media: Math.round(poderBase), factor: 1, estado: "natural" };
    }

    // Check proximity
    let grupoDest = grupoPosicion(posicionDestino);
    let grupoJug = grupoPosicion(jugador.posicion);

    if (grupoDest && grupoJug) {
        if (grupoDest === grupoJug) {
            // Close position (same group, different role)
            let media = Math.round(poderBase * 0.85);
            return { media: media, factor: 0.85, estado: "cercana" };
        }
    }

    // Opposite position
    let media = Math.round(poderBase * 0.5);
    return { media: media, factor: 0.5, estado: "opuesta" };
}

const POSICIONES_FORMACION = {
    "4-3-3": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 68, etiqueta: "LD" }, { x: 35, y: 72, etiqueta: "DFC" },
        { x: 65, y: 72, etiqueta: "DFC" }, { x: 15, y: 68, etiqueta: "LI" },
        { x: 80, y: 45, etiqueta: "MC" }, { x: 50, y: 48, etiqueta: "MC" },
        { x: 20, y: 45, etiqueta: "MC" },
        { x: 80, y: 18, etiqueta: "ED" }, { x: 50, y: 14, etiqueta: "DC" },
        { x: 20, y: 18, etiqueta: "EI" }
    ],
    "4-3-3(2)": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 68, etiqueta: "LD" }, { x: 35, y: 72, etiqueta: "DFC" },
        { x: 65, y: 72, etiqueta: "DFC" }, { x: 15, y: 68, etiqueta: "LI" },
        { x: 80, y: 45, etiqueta: "MC" }, { x: 50, y: 56, etiqueta: "MCD" },
        { x: 20, y: 45, etiqueta: "MC" },
        { x: 80, y: 18, etiqueta: "ED" }, { x: 50, y: 14, etiqueta: "DC" },
        { x: 20, y: 18, etiqueta: "EI" }
    ],
    "4-4-2": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 70, etiqueta: "LD" }, { x: 35, y: 74, etiqueta: "DFC" },
        { x: 65, y: 74, etiqueta: "DFC" }, { x: 15, y: 70, etiqueta: "LI" },
        { x: 80, y: 46, etiqueta: "MD" }, { x: 40, y: 50, etiqueta: "MC" },
        { x: 60, y: 50, etiqueta: "MC" }, { x: 20, y: 46, etiqueta: "MI" },
        { x: 35, y: 16, etiqueta: "DC" }, { x: 65, y: 16, etiqueta: "DC" }
    ],
    "3-4-3": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 25, y: 67, etiqueta: "DFC" }, { x: 50, y: 67, etiqueta: "DFC" },
        { x: 75, y: 67, etiqueta: "DFC" },
        { x: 85, y: 43, etiqueta: "MD" }, { x: 38, y: 44, etiqueta: "MC" },
        { x: 62, y: 44, etiqueta: "MC" }, { x: 15, y: 43, etiqueta: "MI" },
        { x: 80, y: 18, etiqueta: "ED" }, { x: 50, y: 14, etiqueta: "DC" },
        { x: 20, y: 18, etiqueta: "EI" }
    ],
    "3-5-2": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 25, y: 67, etiqueta: "DFC" }, { x: 50, y: 67, etiqueta: "DFC" },
        { x: 75, y: 67, etiqueta: "DFC" },
        { x: 85, y: 41, etiqueta: "MD" }, { x: 33, y: 42, etiqueta: "MC" },
        { x: 50, y: 45, etiqueta: "MCD" },
        { x: 67, y: 42, etiqueta: "MC" }, { x: 15, y: 41, etiqueta: "MI" },
        { x: 35, y: 16, etiqueta: "DC" }, { x: 65, y: 16, etiqueta: "DC" }
    ],
    "4-5-1": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 70, etiqueta: "LD" }, { x: 35, y: 74, etiqueta: "DFC" },
        { x: 65, y: 74, etiqueta: "DFC" }, { x: 15, y: 70, etiqueta: "LI" },
        { x: 85, y: 42, etiqueta: "MD" }, { x: 33, y: 43, etiqueta: "MC" },
        { x: 50, y: 46, etiqueta: "MCD" },
        { x: 67, y: 43, etiqueta: "MC" }, { x: 15, y: 42, etiqueta: "MI" },
        { x: 50, y: 14, etiqueta: "DC" }
    ],
    "5-3-2": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 90, y: 62, etiqueta: "CAD" }, { x: 28, y: 66, etiqueta: "DFC" },
        { x: 50, y: 66, etiqueta: "DFC" },
        { x: 72, y: 66, etiqueta: "DFC" }, { x: 10, y: 62, etiqueta: "CAI" },
        { x: 25, y: 40, etiqueta: "MC" }, { x: 50, y: 42, etiqueta: "MCD" },
        { x: 75, y: 40, etiqueta: "MC" },
        { x: 35, y: 12, etiqueta: "DC" }, { x: 65, y: 12, etiqueta: "DC" }
    ],
    "5-4-1": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 90, y: 62, etiqueta: "CAD" }, { x: 28, y: 66, etiqueta: "DFC" },
        { x: 50, y: 66, etiqueta: "DFC" },
        { x: 72, y: 66, etiqueta: "DFC" }, { x: 10, y: 62, etiqueta: "CAI" },
        { x: 80, y: 40, etiqueta: "MD" }, { x: 40, y: 42, etiqueta: "MC" },
        { x: 60, y: 42, etiqueta: "MC" }, { x: 20, y: 40, etiqueta: "MI" },
        { x: 50, y: 14, etiqueta: "DC" }
    ],
    "5-2-3": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 90, y: 62, etiqueta: "LD" }, { x: 28, y: 66, etiqueta: "DFC" },
        { x: 50, y: 66, etiqueta: "DFC" },
        { x: 72, y: 66, etiqueta: "DFC" }, { x: 10, y: 62, etiqueta: "LI" },
        { x: 35, y: 40, etiqueta: "MC" }, { x: 65, y: 40, etiqueta: "MC" },
        { x: 80, y: 18, etiqueta: "ED" }, { x: 50, y: 14, etiqueta: "DC" },
        { x: 20, y: 18, etiqueta: "EI" }
    ],
    "4-2-3-1": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 72, etiqueta: "LD" }, { x: 35, y: 76, etiqueta: "DFC" },
        { x: 65, y: 76, etiqueta: "DFC" }, { x: 15, y: 72, etiqueta: "LI" },
        { x: 35, y: 53, etiqueta: "MCD" }, { x: 65, y: 53, etiqueta: "MCD" },
        { x: 80, y: 33, etiqueta: "ED" }, { x: 50, y: 33, etiqueta: "MCO" },
        { x: 20, y: 33, etiqueta: "EI" },
        { x: 50, y: 12, etiqueta: "DC" }
    ],
    "4-1-4-1": [
        { x: 50, y: 88, etiqueta: "POR" },
        { x: 85, y: 72, etiqueta: "LD" }, { x: 35, y: 76, etiqueta: "DFC" },
        { x: 65, y: 76, etiqueta: "DFC" }, { x: 15, y: 72, etiqueta: "LI" },
        { x: 50, y: 56, etiqueta: "MCD" },
        { x: 85, y: 38, etiqueta: "MD" }, { x: 36, y: 40, etiqueta: "MC" },
        { x: 64, y: 40, etiqueta: "MC" }, { x: 15, y: 38, etiqueta: "MI" },
        { x: 50, y: 14, etiqueta: "DC" }
    ]
};

function obtenerJugadorPorId(id) {
    return (plantillaActual || []).find(function (j) {
        return j.id === id || j.id === Number(id);
    }) || null;
}

function renderizarJugador(jugador, contenedor, poderPersonalizado, estadoPosicion) {
    if (!jugador || !contenedor) return;

    if (contenedor.dataset.jugadorId && String(contenedor.dataset.jugadorId) === String(jugador.id)) {
        return;
    }

    contenedor.innerHTML = "";
    contenedor.dataset.jugadorId = jugador.id;

    let apellido = (jugador.nombre || "").split(" ").pop() || "Jugador";
    let pieAbrev = (jugador.pierna || "").substring(0, 3);
    let posPie = (jugador.posicion || "") + (pieAbrev ? " - " + pieAbrev : "");
    let poderMostrar = (typeof poderPersonalizado === "number") ? poderPersonalizado : (jugador.poder || "-");
    let colorBadge = "#3b828e";
    if (estadoPosicion === "cercana") colorBadge = "#e67e22";
    else if (estadoPosicion === "opuesta") colorBadge = "#e74c3c";
    else if (estadoPosicion === "secundaria") colorBadge = "#2ecc71";

    let estamina = (jugador.stamina !== undefined ? jugador.stamina : (jugador.poder ? Math.min(100, jugador.poder + 10) : 70));
    let estaminaColor = estamina >= 60 ? "#00c853" : estamina >= 35 ? "#ff9800" : "#d32f2f";
    let lesIcon = jugador.lesionado ? '<span style="font-size:10px;margin-left:4px">🚑</span>' : '';

    let html =
        '<div class="nodo-jugador">' +
            '<div class="circulo-jugador">' +
                '<img src="' + (jugador.foto || "img/jugadores/67849.jpg") + '" alt="' + jugador.nombre + '" loading="lazy" onerror="this.onerror=null;this.src=\'img/jugadores/67849.jpg\'">' +
                '<span class="badge-poder" style="background:' + colorBadge + '">' + poderMostrar + '</span>' +
            '</div>' +
            '<div class="info-jugador">' +
                '<div class="nombre-linea">' + apellido + lesIcon + '</div>' +
                '<div class="pos-linea">' + posPie + '</div>' +
                '<div class="nodo-estamina-bar" style="width:80%;margin:2px auto 0"><div class="nodo-estamina-fill" style="width:' + estamina + '%;background:' + estaminaColor + '"></div></div>' +
            '</div>' +
        '</div>';

    contenedor.innerHTML = html;
}

function renderizarTactica() {
    renderizarNodosCampo();
    renderizarSustitutos();
    renderizarReservas();
    actualizarComboCapitan();
    actualizarBloquePartidoTactica();
    guardarTacticaActual();
}

function renderizarNodosCampo() {
    let contenedor = document.getElementById("nodos-campo");
    if (!contenedor) return;

    let selectFormacion = document.getElementById("select-formacion");
    let formacion = selectFormacion ? selectFormacion.value : "4-3-3";
    let posiciones = POSICIONES_FORMACION[formacion] || POSICIONES_FORMACION["4-3-3"];

    contenedor.innerHTML = "";

    posiciones.forEach(function (pos, idx) {
        let nodo = document.createElement("div");
        nodo.className = "nodo-campo";
        nodo.style.left = pos.x + "%";
        nodo.style.top = pos.y + "%";
        nodo.dataset.indice = idx;
        nodo.dataset.etiqueta = pos.etiqueta;

        let jugadorId = tacticaGuardada.titulares[idx] || null;
        let jugador = jugadorId ? obtenerJugadorPorId(jugadorId) : null;

        if (jugador) {
            nodo.classList.add("ocupado");
            let ajuste = calcularMediaEnPosicion(jugador, pos.etiqueta);
            renderizarJugador(jugador, nodo, ajuste.media, ajuste.estado);
        } else {
            nodo.innerHTML = '<span class="nodo-silueta">' + pos.etiqueta + "</span>";
        }

        nodo.addEventListener("click", function (e) {
            e.stopPropagation();
            manejarClickNodo(nodo, idx);
        });

        contenedor.appendChild(nodo);
    });
}

function renderizarSustitutos() {
    let contenedor = document.getElementById("cuadricula-sustitutos");
    if (!contenedor) return;

    contenedor.innerHTML = "";
    let ocupados = 0;

    for (let i = 0; i < 12; i++) {
        let ficha = document.createElement("div");
        ficha.className = "ficha-sup";
        ficha.dataset.slot = i;

        let jugadorId = tacticaGuardada.sustitutos[i] || null;
        let jugador = jugadorId ? obtenerJugadorPorId(jugadorId) : null;

        if (jugador) {
            ficha.classList.add("ocupada");
            ocupados++;
            renderizarJugador(jugador, ficha);
        } else {
            ficha.classList.add("vacia");
            ficha.innerHTML =
                '<div class="nodo-suplente-placeholder">+</div>';
        }

        ficha.addEventListener("click", function (e) {
            e.stopPropagation();
            manejarClickNodoSuplente(ficha, i);
        });

        contenedor.appendChild(ficha);
    }

    let textoSustitutos = document.getElementById("texto-sustitutos-tactica");
    if (textoSustitutos) {
        textoSustitutos.innerText = ocupados + " / 12";
    }
}

function renderizarReservas() {
    let contenedor = document.getElementById("cuadricula-reservas");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    // Collect all assigned IDs
    let idsAsignados = new Set();
    tacticaGuardada.titulares.forEach(function (id) { if (id) idsAsignados.add(Number(id)); });
    tacticaGuardada.sustitutos.forEach(function (id) { if (id) idsAsignados.add(Number(id)); });

    let disponibles = (plantillaActual || []).filter(function (j) {
        return !idsAsignados.has(j.id);
    });

    if (disponibles.length === 0) {
        contenedor.innerHTML = '<div class="vacio-msg" style="color:#999;font-size:11px;text-align:center;padding:8px">Todos los jugadores están asignados</div>';
        return;
    }

    disponibles.forEach(function (jugador) {
        let ficha = document.createElement("div");
        ficha.className = "ficha-res";
        ficha.dataset.jugadorId = jugador.id;

        let pieAbrev = (jugador.pierna || "").substring(0, 3);
        let posPie = (jugador.posicion || "") + (pieAbrev ? " - " + pieAbrev : "");
        let estamina = (jugador.stamina !== undefined ? jugador.stamina : (jugador.poder ? Math.min(100, jugador.poder + 10) : 70));
        let estaminaColor = estamina >= 60 ? "#00c853" : estamina >= 35 ? "#ff9800" : "#d32f2f";
        let lesBadge = jugador.lesionado ? '<span class="res-lesionado">🚑 ' + jugador.lesionado + 'p</span>' : '';

        ficha.innerHTML =
            '<div class="res-foto-wrapper">' +
                '<img class="res-foto" src="' + (jugador.foto || "img/jugadores/67849.jpg") + '" alt="' + jugador.nombre + '" onerror="this.onerror=null;this.src=\'img/jugadores/67849.jpg\'">' +
                '<span class="res-badge">' + (jugador.poder || "-") + '</span>' +
            '</div>' +
            '<div class="res-info">' +
                '<span class="res-nombre">' + jugador.nombre + '</span>' +
                '<span class="res-detalle">' + posPie + '</span>' +
                lesBadge +
            '</div>' +
            '<div class="res-estamina">' +
                '<div class="res-estamina-fill" style="width:' + estamina + '%;background:' + estaminaColor + '"></div>' +
            '</div>';

        ficha.addEventListener("click", function (e) {
            e.stopPropagation();
            clickJugadorLista(ficha, jugador);
        });

        contenedor.appendChild(ficha);
    });
}

function clickJugadorLista(elementoHtml, datosJugador) {
    if (!jugadorActivo) {
        jugadorActivo = datosJugador;
        elementoHtml.classList.add("seleccionado");
        return;
    }

    document.querySelectorAll(".seleccionado").forEach(function (el) {
        el.classList.remove("seleccionado");
    });

    if (jugadorActivo && jugadorActivo.id === datosJugador.id) {
        jugadorActivo = null;
        return;
    }

    jugadorActivo = datosJugador;
    elementoHtml.classList.add("seleccionado");
}

function manejarClickNodo(nodo, indice) {
    let jugadorId = nodo.dataset.jugadorId ? Number(nodo.dataset.jugadorId) : null;

    // If node already has a player, remove it
    if (jugadorId) {
        tacticaGuardada.titulares[indice] = null;
        if (jugadorActivo) {
            document.querySelectorAll(".seleccionado").forEach(function (el) {
                el.classList.remove("seleccionado");
            });
            jugadorActivo = null;
        }
        renderizarTactica();
        return;
    }

    // If no player is selected, nothing to place
    if (!jugadorActivo) return;

    // Check 11 limit
    let ocupados = 0;
    tacticaGuardada.titulares.forEach(function (id) { if (id) ocupados++; });
    if (ocupados >= 11) {
        alert("Has alcanzado el límite de 11 jugadores");
        return;
    }

    // Prevent duplicate
    let yaEnCampo = tacticaGuardada.titulares.some(function (id) {
        return id === jugadorActivo.id;
    });
    if (yaEnCampo) return;

    // Also check if in sustitutos (remove from there)
    let idxSup = tacticaGuardada.sustitutos.indexOf(jugadorActivo.id);
    if (idxSup !== -1) {
        tacticaGuardada.sustitutos[idxSup] = null;
    }

    // Place the player
    tacticaGuardada.titulares[indice] = jugadorActivo.id;

    document.querySelectorAll(".seleccionado").forEach(function (el) {
        el.classList.remove("seleccionado");
    });
    jugadorActivo = null;

    renderizarTactica();
}

function manejarClickNodoSuplente(slotElement, indice) {
    let jugadorId = slotElement.dataset.jugadorId ? Number(slotElement.dataset.jugadorId) : null;

    // If slot already has a player, remove it
    if (jugadorId) {
        tacticaGuardada.sustitutos[indice] = null;
        if (jugadorActivo) {
            document.querySelectorAll(".seleccionado").forEach(function (el) {
                el.classList.remove("seleccionado");
            });
            jugadorActivo = null;
        }
        renderizarTactica();
        return;
    }

    // If no player is selected, nothing to place
    if (!jugadorActivo) return;

    // Check 12 limit
    let ocupados = 0;
    tacticaGuardada.sustitutos.forEach(function (id) { if (id) ocupados++; });
    if (ocupados >= 12) {
        alert("Has alcanzado el límite de 12 suplentes");
        return;
    }

    // Prevent duplicate
    let yaEnBanquillo = tacticaGuardada.sustitutos.some(function (id) {
        return id === jugadorActivo.id;
    });
    if (yaEnBanquillo) return;

    // If player is on the field, remove from there first
    let idxCampo = tacticaGuardada.titulares.indexOf(jugadorActivo.id);
    if (idxCampo !== -1) {
        tacticaGuardada.titulares[idxCampo] = null;
    }

    // Place the player
    tacticaGuardada.sustitutos[indice] = jugadorActivo.id;

    document.querySelectorAll(".seleccionado").forEach(function (el) {
        el.classList.remove("seleccionado");
    });
    jugadorActivo = null;

    renderizarTactica();
}

function cambiarFormacion() {
    let selectFormacion = document.getElementById("select-formacion");
    if (selectFormacion) {
        tacticaGuardada.formacion = selectFormacion.value;
    }
    renderizarTactica();
}

function actualizarComboCapitan() {
    let selectCapitan = document.getElementById("select-capitan-tactica");
    if (!selectCapitan) return;

    let capitanActual = selectCapitan.value;
    selectCapitan.innerHTML = "";

    let titulares = [];
    tacticaGuardada.titulares.forEach(function (id) {
        if (id) {
            let j = obtenerJugadorPorId(id);
            if (j) titulares.push(j);
        }
    });

    let opcionBase = document.createElement("option");
    opcionBase.value = "";
    opcionBase.innerText = titulares.length > 0 ? "Elegir capitán" : "Sin titulares";
    selectCapitan.appendChild(opcionBase);

    titulares.forEach(function (jugador) {
        let opcion = document.createElement("option");
        opcion.value = String(jugador.id);
        opcion.innerText = jugador.nombre || "Jugador";
        selectCapitan.appendChild(opcion);
    });

    if (titulares.some(function (jugador) {
        return String(jugador.id) === capitanActual;
    })) {
        selectCapitan.value = capitanActual;
    } else {
        selectCapitan.value = "";
    }
}

function actualizarBloquePartidoTactica() {
    let proximoRival = obtenerProximoRival();

    let logoLocal = document.getElementById("tactica-logo-local");
    let logoVisitante = document.getElementById("tactica-logo-visitante");
    let poderLocal = document.getElementById("tactica-poder-local");
    let poderVisitante = document.getElementById("tactica-poder-visitante");
    let posiciones = document.getElementById("tactica-posiciones");
    let jornadaPartido = document.getElementById("tactica-dia-partido");

    if (logoLocal && equipoSeleccionado) {
        logoLocal.src = equipoSeleccionado.logo;
        logoLocal.alt = equipoSeleccionado.nombre;
    }

    if (logoVisitante) {
        var datosRivalTact = laLigaClasificacion.find(function (e) { return e.nombre === proximoRival.nombre; });
        logoVisitante.src = (datosRivalTact && datosRivalTact.escudo) || proximoRival.logo || (equipoSeleccionado ? equipoSeleccionado.logo : "");
        logoVisitante.alt = proximoRival.nombre || "Rival";
    }

    if (poderLocal) {
        poderLocal.innerText = equipoSeleccionado && typeof equipoSeleccionado.valoracion === "number" ? String(equipoSeleccionado.valoracion) : "-";
    }

    if (poderVisitante) {
        poderVisitante.innerText = typeof proximoRival.valoracion === "number" ? String(proximoRival.valoracion) : "-";
    }

    if (posiciones) {
        let posicionRival = typeof proximoRival.posicion === "number" ? proximoRival.posicion : (proximoRival.posicionLiga || "-");
        posiciones.innerText = posicionActual + "º vs " + posicionRival + "º";
    }

    if (jornadaPartido) {
        jornadaPartido.innerText = "Jornada " + jornadaActual;
    }
}

// Delegated click: if a ficha-sup or ficha-res is clicked and no jugadorActivo,
// we handle it via the individual listeners. But if a nodo-campo is clicked,
// it goes through manejarClickNodo.
document.addEventListener("click", function (e) {
    if (e.target.closest(".ficha-sup") || e.target.closest(".ficha-res") || e.target.closest(".nodo-campo")) {
        return; // handled by individual listeners
    }
});

function toggleMenuLateral() {
    let menu = document.getElementById("menu-lateral");
    if (!menu) return;
    menu.classList.toggle("menu-abierto");
}

function cerrarMenuLateral() {
    let menu = document.getElementById("menu-lateral");
    if (!menu) return;
    menu.classList.remove("menu-abierto");
}

function abrirBandejaEntrada() {
    cerrarMenuLateral();
    alert("Bandeja de Entrada: tienes 3 nuevos mensajes del club.");
}

function abrirHistorialTorneos() {
    cerrarMenuLateral();
    alert("Historial de Torneos: Primera, Segunda, Copa del Rey y Supercopa.");
}

function verEstadio() {
    alert("Vista previa del estadio de " + (equipoSeleccionado ? equipoSeleccionado.nombre : "tu club") + ".");
}

function mostrarDetalleJugador(jugador) {
    let modal = document.getElementById("modal-detalle-jugador");
    if (!modal || !jugador) return;

    // Reset: hide inline negotiation form, show player info
    document.getElementById("negociacion-inline").style.display = "none";
    document.getElementById("form-fichar").style.display = "none";
    document.getElementById("form-cesion").style.display = "none";
    document.getElementById("form-cesion-opcion").style.display = "none";
    var seccionesInfo = document.querySelectorAll(".tarjeta-datos-tecnicos, .tarjeta-estadisticas, .historial-partidos, .acciones-fichajes-modal, #mercado-acciones-modal");
    for (var i = 0; i < seccionesInfo.length; i++) {
        if (seccionesInfo[i]) seccionesInfo[i].style.display = "";
    }

    let fotoJugador = document.getElementById("det-foto");

    modal.classList.remove("modal-cerrando");

    if (!Array.isArray(window.listaTransferibles)) {
        window.listaTransferibles = [];
    }

    if (!Array.isArray(window.listaCedibles)) {
        window.listaCedibles = [];
    }

    document.getElementById("detalle-jugador-nombre").innerText = jugador.nombre || "Jugador";
    document.getElementById("detalle-jugador-posicion").innerText = jugador.posicion || "-";

    // Secondary positions
    let posSec = document.getElementById("detalle-jugador-pos-sec");
    if (posSec) {
        let secs = jugador.posicionesSecundarias || [];
        posSec.innerHTML = "";
        if (secs.length > 0) {
            secs.forEach(function (p) {
                let span = document.createElement("span");
                span.className = "sec-pos";
                span.innerText = p;
                posSec.appendChild(span);
            });
        }
    }

    document.getElementById("detalle-jugador-nacionalidad").innerText = jugador.nacionalidad || "-";
    document.getElementById("detalle-jugador-edad").innerText = jugador.edad ? String(jugador.edad) : "-";
    document.getElementById("detalle-jugador-pierna").innerText = jugador.pierna || "-";
    document.getElementById("detalle-jugador-valor").innerText = jugador.valor || "-";
    document.getElementById("detalle-jugador-poder").innerText = (typeof jugador.poder === "number") ? String(jugador.poder) : "-";

    if (fotoJugador) {
        fotoJugador.onerror = function () {
            this.onerror = null;
            this.src = "img/jugadores/67849.jpg";
        };
        fotoJugador.src = jugador.foto || "img/jugadores/67849.jpg";
    }

    // Stats summary
    let statsContainer = document.getElementById("detalle-estadisticas");
    if (statsContainer) {
        let stats = jugador.estadisticas || { pj: 0, goles: 0, asistencias: 0, amarillas: 0, rojas: 0, mvp: 0 };
        let inactivo = stats.pj === 0;
        if (inactivo) {
            statsContainer.innerHTML =
                '<div class="stat-item"><span class="stat-label">PJ</span><span class="stat-value">-</span></div>' +
                '<div class="stat-item"><span class="stat-label">G</span><span class="stat-value">-</span></div>' +
                '<div class="stat-item"><span class="stat-label">A</span><span class="stat-value">-</span></div>' +
                '<div class="stat-item"><span class="stat-label">TA</span><span class="stat-value">-</span></div>' +
                '<div class="stat-item"><span class="stat-label">TR</span><span class="stat-value">-</span></div>' +
                '<div class="stat-item"><span class="stat-label">MVP</span><span class="stat-value">-</span></div>';
        } else {
            statsContainer.innerHTML =
                '<div class="stat-item"><span class="stat-label">PJ</span><span class="stat-value">' + (stats.pj || 0) + '</span></div>' +
                '<div class="stat-item"><span class="stat-label">G</span><span class="stat-value">' + (stats.goles || 0) + '</span></div>' +
                '<div class="stat-item"><span class="stat-label">A</span><span class="stat-value">' + (stats.asistencias || 0) + '</span></div>' +
                '<div class="stat-item"><span class="stat-label">TA</span><span class="stat-value">' + (stats.amarillas || 0) + '</span></div>' +
                '<div class="stat-item"><span class="stat-label">TR</span><span class="stat-value">' + (stats.rojas || 0) + '</span></div>' +
                '<div class="stat-item"><span class="stat-label">MVP</span><span class="stat-value">' + (stats.mvp || 0) + '</span></div>';
        }
    }

    // Match history
    let historialBody = document.getElementById("historial-body");
    let btnHistorial = document.getElementById("btn-historial");
    let historialContenido = document.getElementById("historial-contenido");

    let stats = jugador.estadisticas || { pj: 0 };
    if (stats.pj === 0) {
        if (btnHistorial) {
            btnHistorial.style.display = "none";
        }
    } else {
        if (btnHistorial) {
            btnHistorial.style.display = "block";
        }
    }

    if (historialBody) {
        let partidos = jugador.historialPartidos || [];
        historialBody.innerHTML = "";
        if (partidos.length === 0) {
            historialBody.innerHTML = '<tr><td colspan="5" class="historial-vacio">Sin partidos registrados</td></tr>';
        } else {
            partidos.forEach(function (p) {
                let nota = p.nota || 0;
                let notaClase = nota >= 7.5 ? "nota-verde" : nota >= 6 ? "nota-amarilla" : "nota-roja";
                let accionesHtml = "";
                (p.acciones || []).forEach(function (acc) {
                    if (acc === "gol") accionesHtml += '<span class="accion-icono gol">⚽</span> ';
                    else if (acc === "asistencia") accionesHtml += '<span class="accion-icono asist">🅰</span> ';
                    else if (acc === "amarilla") accionesHtml += '<span class="accion-icono tarjeta-amarilla">🟨</span> ';
                    else if (acc === "roja") accionesHtml += '<span class="accion-icono tarjeta-roja">🟥</span> ';
                    else if (acc === "mvp") accionesHtml += '<span class="accion-icono mvp">⭐</span> ';
                });
                let fila = document.createElement("tr");
                fila.innerHTML =
                    '<td>' + (p.jornada || "-") + '</td>' +
                    '<td>' + (p.rival || "-") + '</td>' +
                    '<td>' + (p.minutos || "0") + "'</td>" +
                    '<td class="' + notaClase + '">' + nota + '</td>' +
                    '<td>' + (accionesHtml || "-") + '</td>';
                historialBody.appendChild(fila);
            });
        }
    }

    // Reset historial toggle
    if (btnHistorial && historialContenido) {
        btnHistorial.classList.remove("activo");
        historialContenido.classList.remove("abierto");
        btnHistorial.innerText = "📋 Ver historial detallado";
    }

    let btnTransferibles = document.getElementById("btn-lista-transferibles");
    let btnCedibles = document.getElementById("btn-lista-cedibles");

    if (btnTransferibles) {
        btnTransferibles.onclick = function () {
            let indice = window.listaTransferibles.indexOf(jugador.nombre);
            if (indice === -1) {
                window.listaTransferibles.push(jugador.nombre);
                renderizarOficina();
                alert(jugador.nombre + " añadido a la Lista de Transferibles.");
            } else {
                window.listaTransferibles.splice(indice, 1);
                renderizarOficina();
                alert(jugador.nombre + " eliminado de la Lista de Transferibles.");
            }
        };
    }

    if (btnCedibles) {
        btnCedibles.onclick = function () {
            let indice = window.listaCedibles.indexOf(jugador.nombre);
            if (indice === -1) {
                window.listaCedibles.push(jugador.nombre);
                renderizarOficina();
                alert(jugador.nombre + " añadido a la Lista de Cedibles.");
            } else {
                window.listaCedibles.splice(indice, 1);
                renderizarOficina();
                alert(jugador.nombre + " eliminado de la Lista de Cedibles.");
            }
        };
    }

    // Mostrar/ocultar botones según si es jugador rival o propio
    var esRival = !!window.jugadorMercadoActual;
    if (btnTransferibles) btnTransferibles.style.display = esRival ? "none" : "";
    if (btnCedibles) btnCedibles.style.display = esRival ? "none" : "";

    // Mercado actions: show fichar/ceder only when called from mercado/rival
    var mercadoActions = document.getElementById("mercado-acciones-modal");
    if (mercadoActions) {
        mercadoActions.innerHTML = "";
        if (window.jugadorMercadoActual) {
            mercadoActions.style.display = "flex";
            var btnFichar = document.createElement("button");
            btnFichar.className = "btn-mercado-fichar";
            btnFichar.innerText = "💵 Fichar";
            btnFichar.onclick = function () {
                mostrarFormularioFichaje();
            };

            var btnCeder = document.createElement("button");
            btnCeder.className = "btn-mercado-ceder";
            btnCeder.innerText = "📄 Ceder";
            btnCeder.onclick = function () {
                mostrarFormularioCesion();
            };

            mercadoActions.appendChild(btnFichar);
            mercadoActions.appendChild(btnCeder);

            var btnCederOpcion = document.createElement("button");
            btnCederOpcion.className = "btn-mercado-ceder-opcion";
            btnCederOpcion.innerText = "🔄 Cesión + Opc. Compra";
            btnCederOpcion.onclick = function () {
                mostrarFormularioCesionOpcion();
            };
            mercadoActions.appendChild(btnCederOpcion);
        } else {
            mercadoActions.style.display = "none";
        }
    }

    modal.classList.add("activo");
}

function toggleHistorial() {
    let btn = document.getElementById("btn-historial");
    let contenido = document.getElementById("historial-contenido");
    if (!btn || !contenido) return;
    let abriendo = !contenido.classList.contains("abierto");
    contenido.classList.toggle("abierto");
    btn.classList.toggle("activo");
    btn.innerText = abriendo ? "📋 Ocultar historial" : "📋 Ver historial detallado";
}

function abrirInstrucciones() {
    let overlay = document.getElementById("modal-instrucciones");
    if (!overlay) return;

    if (!window.rolesEquipo) {
        window.rolesEquipo = { capitan: null, faltas: null, penaltis: null, esquinas: null };
    }

    renderizarRoles();

    let tacticaActual = window.tacticaEquipo || "";
    document.querySelectorAll(".tactica-btn").forEach(function (btn) {
        btn.classList.toggle("seleccionada", btn.dataset.tactica === tacticaActual);
    });

    overlay.classList.add("activo");
}

function cerrarInstrucciones() {
    let overlay = document.getElementById("modal-instrucciones");
    if (!overlay) return;
    // Persist roles to select-capitan-tactica
    if (window.rolesEquipo && window.rolesEquipo.capitan) {
        let selectCapitan = document.getElementById("select-capitan-tactica");
        if (selectCapitan) selectCapitan.value = String(window.rolesEquipo.capitan);
    }
    overlay.classList.remove("activo");
}

function cambiarTabInstrucciones(tab) {
    document.querySelectorAll(".tab-btn").forEach(function (btn) {
        btn.classList.toggle("activo", btn.dataset.tab === tab);
    });
    document.querySelectorAll(".tab-panel").forEach(function (panel) {
        panel.classList.toggle("activo", panel.id === "panel-" + tab);
    });
    if (tab === "roles") renderizarRoles();
}

function seleccionarTactica(btn) {
    document.querySelectorAll(".tactica-btn").forEach(function (b) {
        b.classList.remove("seleccionada");
    });
    btn.classList.add("seleccionada");
    window.tacticaEquipo = btn.dataset.tactica;
}

function renderizarRoles() {
    let tbody = document.getElementById("roles-tabla-body");
    if (!tbody) return;

    tbody.innerHTML = "";

    let titulares = [];
    tacticaGuardada.titulares.forEach(function (id) {
        if (id) {
            let j = obtenerJugadorPorId(id);
            if (j) titulares.push(j);
        }
    });

    if (titulares.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#999;padding:20px;font-size:12px">No hay titulares asignados</td></tr>';
        return;
    }

    if (!window.rolesEquipo) {
        window.rolesEquipo = { capitan: null, faltas: null, penaltis: null, esquinas: null };
    }

    let roles = ["capitan", "faltas", "penaltis", "esquinas"];

    titulares.forEach(function (jugador) {
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.className = "rol-jugador";
        tdNombre.innerHTML =
            '<img class="rol-foto" src="' + (jugador.foto || "img/jugadores/67849.jpg") + '" alt="" onerror="this.src=\'img/jugadores/67849.jpg\'">' +
            '<span class="rol-nombre">' + jugador.nombre + "</span>";
        tr.appendChild(tdNombre);

        roles.forEach(function (rol) {
            let td = document.createElement("td");
            let div = document.createElement("div");
            div.className = "rol-check" + (window.rolesEquipo[rol] === jugador.id ? " activo" : "");
            div.dataset.rol = rol;
            div.dataset.jugadorId = jugador.id;

            div.addEventListener("click", function (e) {
                e.stopPropagation();
                let idJug = Number(this.dataset.jugadorId);

                if (window.rolesEquipo[rol] === idJug) {
                    // Desmarcar
                    window.rolesEquipo[rol] = null;
                    this.classList.remove("activo");
                } else {
                    // Marcar: desmarcar el anterior en ese rol
                    window.rolesEquipo[rol] = idJug;
                    document.querySelectorAll('#roles-tabla-body .rol-check[data-rol="' + rol + '"]').forEach(function (el) {
                        el.classList.remove("activo");
                    });
                    this.classList.add("activo");
                }
            });

            td.appendChild(div);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
}

function actualizarEstadisticas(idJugador, datosPartido) {
    let jugador = (plantillaActual || []).find(function (j) {
        return j.id === idJugador || j.id === Number(idJugador);
    });
    if (!jugador) return;

    if (!jugador.estadisticas) {
        jugador.estadisticas = { pj: 0, goles: 0, asistencias: 0, amarillas: 0, rojas: 0, mvp: 0 };
    }
    if (!jugador.historialPartidos) {
        jugador.historialPartidos = [];
    }

    jugador.estadisticas.pj = (jugador.estadisticas.pj || 0) + 1;
    jugador.estadisticas.goles = (jugador.estadisticas.goles || 0) + (datosPartido.goles || 0);
    jugador.estadisticas.asistencias = (jugador.estadisticas.asistencias || 0) + (datosPartido.asistencias || 0);
    jugador.estadisticas.amarillas = (jugador.estadisticas.amarillas || 0) + (datosPartido.amarillas || 0);
    jugador.estadisticas.rojas = (jugador.estadisticas.rojas || 0) + (datosPartido.rojas || 0);
    if (datosPartido.mvp) {
        jugador.estadisticas.mvp = (jugador.estadisticas.mvp || 0) + 1;
    }

    jugador.historialPartidos.push({
        jornada: datosPartido.jornada || jornadaActual,
        rival: datosPartido.rival || "Rival",
        minutos: datosPartido.minutos || 90,
        nota: datosPartido.nota || 6.0,
        acciones: datosPartido.acciones || []
    });
}

function cerrarDetalleJugador() {
    let modal = document.getElementById("modal-detalle-jugador");
    if (!modal) return;
    if (!modal.classList.contains("activo") || modal.classList.contains("modal-cerrando")) return;

    modal.classList.add("modal-cerrando");

    setTimeout(function () {
        modal.classList.remove("activo");
        modal.classList.remove("modal-cerrando");
        window.jugadorMercadoActual = null;
    }, 200);
}

function posicionarMenuEnBarraSuperior() {
    let barraSuperior = document.querySelector(".barra-menu-superior-fija");
    let btnMenu = document.getElementById("btn-menu-oficina");

    if (!barraSuperior || !btnMenu) return;

    if (!barraSuperior.contains(btnMenu)) {
        barraSuperior.prepend(btnMenu);
    }

    btnMenu.classList.add("btn-menu-superior-fijo");
}

// Inserta el icono del estadio en la misma fila del botón de menú de oficina.
function inicializarCabeceraOficina() {
    let contenedorMenu = document.querySelector(".menu-oficina");
    
    // Si ya existe el botón de estadio, no lo volvemos a crear
    if (!contenedorMenu || document.getElementById("btn-ver-estadio-icono")) return;

    let btnEstadioIcono = document.createElement("button");
    btnEstadioIcono.id = "btn-ver-estadio-icono";
    btnEstadioIcono.innerHTML = "🏟️";
    btnEstadioIcono.title = "Ver Estadio";
    btnEstadioIcono.onclick = verEstadio;

    contenedorMenu.appendChild(btnEstadioIcono);
}

// ==========================================================================
// MATCH SIMULATION ENGINE
// ==========================================================================

function detectarFormacionRival(jugadores) {
    var contar = { POR: 0, LD: 0, LI: 0, DFC: 0, MCD: 0, MC: 0, MCO: 0, MI: 0, MD: 0, ED: 0, EI: 0, DC: 0 };
    jugadores.forEach(function (j) {
        var p = (j.posicion || "").toUpperCase();
        if (contar[p] !== undefined) contar[p]++;
    });
    var totalDef = contar.LD + contar.LI + contar.DFC;
    var totalMed = contar.MCD + contar.MC + contar.MCO + contar.MI + contar.MD;
    var totalDel = contar.ED + contar.EI + contar.DC;
    if (totalDef >= 5 && totalMed >= 4 && totalDel >= 2) return "5-3-2";
    if (totalDef >= 4 && totalMed >= 3 && totalDel >= 3) return "4-3-3";
    if (totalDef >= 4 && totalMed >= 4 && totalDel >= 2) return "4-4-2";
    if (totalDef >= 3 && totalMed >= 5 && totalDel >= 2) return "3-5-2";
    if (totalDef >= 5 && totalMed >= 3 && totalDel >= 1) return "5-4-1";
    if (totalDef >= 4 && totalMed >= 2 && totalDel >= 3) return "4-2-3-1";
    return "4-3-3";
}

var compatibilidadPosiciones = {
    "POR": ["POR"],
    "LD": ["LD", "CAD", "MD"],
    "LI": ["LI", "CAI", "MI"],
    "DFC": ["DFC", "LD", "LI", "CAD", "CAI"],
    "CAD": ["CAD", "LD"],
    "CAI": ["CAI", "LI"],
    "MCD": ["MCD", "MC"],
    "MC": ["MC", "MCD", "MCO"],
    "MCO": ["MCO", "MC", "MI", "MD"],
    "MI": ["MI", "MD", "LI", "EI"],
    "MD": ["MD", "MI", "LD", "ED"],
    "ED": ["ED", "EI", "MI", "MD"],
    "EI": ["EI", "ED", "MI", "MD"],
    "DC": ["DC", "MCO", "ED", "EI"]
};

function poderEfectivo(jugador) {
    if (!jugador) return 0;
    var base = jugador.poder || jugador.rating || 50;
    var stam = (jugador.stamina !== undefined && jugador.stamina !== null) ? jugador.stamina : 100;
    if (stam < 50) return Math.round(base * (0.5 + 0.5 * (stam / 100)));
    return base;
}

function encontrarMejorRival(slotTag, disponibles) {
    var compats = compatibilidadPosiciones[slotTag] || [slotTag];
    var bestIdx = -1, bestPoder = -1;
    for (var ci = 0; ci < compats.length; ci++) {
        for (var di = 0; di < disponibles.length; di++) {
            var pos = (disponibles[di].posicion || "").toUpperCase();
            if (pos === compats[ci]) {
                var pod = poderEfectivo(disponibles[di]);
                if (pod > bestPoder) { bestPoder = pod; bestIdx = di; }
            }
        }
        if (bestIdx >= 0) break;
    }
    if (bestIdx < 0 && slotTag !== "POR") {
        for (var di = 0; di < disponibles.length; di++) {
            if ((disponibles[di].posicion || "").toUpperCase() !== "POR") {
                bestIdx = di; break;
            }
        }
    }
    if (bestIdx >= 0) return disponibles.splice(bestIdx, 1)[0];
    return null;
}

var formacionesEquipos = {
    "FC Barcelona": "4-2-3-1",
    "Real Madrid": ["4-3-3", "4-4-2"],
    "Atlético de Madrid": ["5-3-2", "4-4-2"],
    "Athletic Club": "4-2-3-1",
    "Real Sociedad": "4-3-3",
    "Real Betis": "4-2-3-1",
    "Celta": "3-4-3",
    "Sevilla": "4-3-3",
    "Girona": "4-2-3-1",
    "Valencia": "4-4-2",
    "Osasuna": "4-3-3",
    "Rayo Vallecano": "4-2-3-1",
    "Getafe": ["4-4-2", "5-3-2"],
    "Deportivo Alavés": "4-2-3-1",
    "Mallorca": ["4-2-3-1", "5-4-1"],
    "Espanyol": "4-4-2",
    "Real Oviedo": "4-2-3-1",
    "Elche": "4-3-3",
    "Levante": "4-2-3-1",
    "Villarreal": "4-4-2"
};

var entrenadoresLiga = {
    "FC Barcelona": "Hansi Flick",
    "Real Madrid": "Carlo Ancelotti",
    "Atlético de Madrid": "Diego Simeone",
    "Athletic Club": "Ernesto Valverde",
    "Real Sociedad": "Imanol Alguacil",
    "Real Betis": "Manuel Pellegrini",
    "Celta": "Claudio Giráldez",
    "Sevilla": "García Pimienta",
    "Girona": "Míchel",
    "Valencia": "Rubén Baraja",
    "Osasuna": "Vicente Moreno",
    "Rayo Vallecano": "Íñigo Pérez",
    "Getafe": "José Bordalás",
    "Deportivo Alavés": "Luis García",
    "Mallorca": "Jagoba Arrasate",
    "Espanyol": "Manolo González",
    "Real Oviedo": "Javi Calleja",
    "Elche": "Eder Sarabia",
    "Levante": "Julián Calero",
    "Villarreal": "Marcelino"
};

function obtenerAlineacionIA(equipoNombre) {
    var plantilla = mercadoTodasLasPlantillas[equipoNombre];
    if (!plantilla || plantilla.length === 0) {
        var club = laLigaClasificacion.find(function (e) { return e.nombre === equipoNombre; });
        if (club && club.jugadores && club.jugadores.length > 0) {
            plantilla = club.jugadores;
        } else {
            plantilla = generarPlantillaClub(equipoNombre);
        }
        mercadoTodasLasPlantillas[equipoNombre] = plantilla;
    }
    var formacion = formacionesEquipos[equipoNombre];
    if (!formacion) {
        formacion = detectarFormacionRival(plantilla);
    } else if (Array.isArray(formacion)) {
        formacion = formacion[Math.floor(Math.random() * formacion.length)];
    }
    var posiciones = POSICIONES_FORMACION[formacion] || POSICIONES_FORMACION["4-3-3"];
    var titulares = [];
    var disponibles = plantilla.filter(function (j) { return j && !j.sancion && !j.lesionado; }).slice();
    posiciones.forEach(function (slot) {
        titulares.push(encontrarMejorRival(slot.etiqueta, disponibles));
    });
    return { titulares: titulares, sustitutos: disponibles, formacion: formacion };
}

function calcularPoderEquipo(titulares) {
    var suma = 0, count = 0;
    titulares.forEach(function (j) {
        if (j) { suma += poderEfectivo(j); count++; }
    });
    return count > 0 ? Math.round(suma / count) : 50;
}

function poissonRandom(media) {
    if (media <= 0) return 0;
    var L = Math.exp(-media);
    var k = 0;
    var p = 1;
    do { k++; p *= Math.random(); } while (p > L);
    return k - 1;
}

function simularPartidoCompleto(alineacionLocal, alineacionVisit, nombreLocal, nombreVisit, esUsuarioLocal) {
    var poderLocal = calcularPoderEquipo(alineacionLocal.titulares);
    var poderVisit = calcularPoderEquipo(alineacionVisit.titulares);
    var dif = poderLocal - poderVisit;
    var mediaLocal = Math.max(0.2, 1.0 + dif * 0.03);
    var mediaVisit = Math.max(0.2, 1.0 - dif * 0.03);
    var golesLocal = poissonRandom(mediaLocal);
    var golesVisit = poissonRandom(mediaVisit);

    var todosTitularesLocales = alineacionLocal.titulares.filter(function (j) { return j; });
    var todosTitularesVisit = alineacionVisit.titulares.filter(function (j) { return j; });

    var sustitucionesLocal = [];
    var sustitucionesVisit = [];

    // Distribute goals among scorers (weighted by position)
    function distribuirGoles(goles, jugadores) {
        var golesArr = [];
        if (goles === 0 || jugadores.length === 0) return golesArr;
        var pesos = [];
        jugadores.forEach(function (j) {
            var p = (j.posicion || "").toUpperCase();
            var peso = 1;
            if (["DC", "ED", "EI"].indexOf(p) >= 0) peso = 5;
            else if (["MCO", "MC", "MD", "MI", "MCD"].indexOf(p) >= 0) peso = 2;
            else if (["LD", "LI", "CAD", "CAI", "DFC"].indexOf(p) >= 0) peso = 0.5;
            else if (p === "POR") peso = 0.05;
            pesos.push(peso);
        });
        var totalPeso = 0;
        pesos.forEach(function (p) { totalPeso += p; });
        if (totalPeso === 0) totalPeso = 1;
        for (var gi = 0; gi < goles; gi++) {
            var r = Math.random() * totalPeso;
            var acc = 0;
            for (var pj = 0; pj < jugadores.length; pj++) {
                acc += (pesos[pj] || 0);
                if (r <= acc) { golesArr.push(jugadores[pj]); break; }
            }
        }
        return golesArr;
    }

    var goleadoresLocal = distribuirGoles(golesLocal, todosTitularesLocales);
    var goleadoresVisit = distribuirGoles(golesVisit, todosTitularesVisit);
    var asistenciasLocal = [];
    var asistenciasVisit = [];

    // Generate assistants for each goal (70% chance)
    goleadoresLocal.forEach(function () {
        if (Math.random() < 0.7 && todosTitularesLocales.length > 1) {
            var asis = todosTitularesLocales[Math.floor(Math.random() * todosTitularesLocales.length)];
            asistenciasLocal.push(asis);
        }
    });
    goleadoresVisit.forEach(function () {
        if (Math.random() < 0.7 && todosTitularesVisit.length > 1) {
            var asis = todosTitularesVisit[Math.floor(Math.random() * todosTitularesVisit.length)];
            asistenciasVisit.push(asis);
        }
    });

    // Yellow cards (1-4 per match total)
    var amarillasLocal = [];
    var amarillasVisit = [];
    var numAmarillas = Math.floor(Math.random() * 4);
    for (var ai = 0; ai < numAmarillas; ai++) {
        var pool = Math.random() < 0.5 ? todosTitularesLocales : todosTitularesVisit;
        if (pool.length > 0) {
            var am = pool[Math.floor(Math.random() * pool.length)];
            if (Math.random() < 0.5) amarillasLocal.push(am);
            else amarillasVisit.push(am);
        }
    }

    // Red cards (0-1 per match)
    var rojasLocal = [], rojasVisit = [];
    if (Math.random() < 0.08 && todosTitularesLocales.length > 0) {
        rojasLocal.push(todosTitularesLocales[Math.floor(Math.random() * todosTitularesLocales.length)]);
    }
    if (Math.random() < 0.08 && todosTitularesVisit.length > 0) {
        rojasVisit.push(todosTitularesVisit[Math.floor(Math.random() * todosTitularesVisit.length)]);
    }
    // Assign suspension duration (1-2 matches)
    rojasLocal.forEach(function (j) { if (j) j.sancion = (j.sancion || 0) + 1 + Math.floor(Math.random() * 2); });
    rojasVisit.forEach(function (j) { if (j) j.sancion = (j.sancion || 0) + 1 + Math.floor(Math.random() * 2); });

    // Calculate player ratings
    function calcularNota(jugador, golesJug, asistenciasJug, amarilla, roja, titular) {
        if (!jugador) return { nota: 0, minutos: 0 };
        var base = (jugador.poder || jugador.rating || 50) / 10;
        var nota = base + (golesJug * 0.8) + (asistenciasJug * 0.4);
        if (amarilla) nota -= 0.3;
        if (roja) nota -= 1.2;
        nota = Math.max(3.0, Math.min(10.0, nota));
        return { nota: Math.round(nota * 10) / 10, minutos: titular ? 90 : Math.floor(30 + Math.random() * 50) };
    }

    var eventos = [];
    var totalTitularesLocales = alineacionLocal.titulares.filter(function (j) { return j; });

    // Local player stats
    function procesarEventosJugadores(jugadores, golesArr, asistenciasArr, amarillasArr, rojasArr, esLocal) {
        var resultados = [];
        var contGoles = {};
        var contAsistencias = {};
        var mapaAmarillas = {};
        var mapaRojas = {};

        golesArr.forEach(function (j) { contGoles[j.nombre] = (contGoles[j.nombre] || 0) + 1; });
        asistenciasArr.forEach(function (j) { contAsistencias[j.nombre] = (contAsistencias[j.nombre] || 0) + 1; });
        amarillasArr.forEach(function (j) { mapaAmarillas[j.nombre] = true; });
        rojasArr.forEach(function (j) { mapaRojas[j.nombre] = true; });

        jugadores.forEach(function (j) {
            if (!j) return;
            var g = contGoles[j.nombre] || 0;
            var a = contAsistencias[j.nombre] || 0;
            var am = !!mapaAmarillas[j.nombre];
            var rj = !!mapaRojas[j.nombre];
            var calc = calcularNota(j, g, a, am, rj, true);
            var acciones = [];
            for (var gi2 = 0; gi2 < g; gi2++) acciones.push("gol");
            for (var ai2 = 0; ai2 < a; ai2++) acciones.push("asistencia");
            if (am) acciones.push("amarilla");
            if (rj) acciones.push("roja");
            resultados.push({ jugador: j, goles: g, asistencias: a, nota: calc.nota, minutos: calc.minutos, amarilla: am, roja: rj, acciones: acciones });
        });
        return resultados;
    }

    var eventosLocal = procesarEventosJugadores(todosTitularesLocales, goleadoresLocal, asistenciasLocal, amarillasLocal, rojasLocal, true);
    var eventosVisit = procesarEventosJugadores(todosTitularesVisit, goleadoresVisit, asistenciasVisit, amarillasVisit, rojasVisit, false);

    // MVP: highest rated from winning team
    var ganador = golesLocal > golesVisit ? nombreLocal : (golesVisit > golesLocal ? nombreVisit : null);
    var todosEventos = eventosLocal.concat(eventosVisit);
    var mvp = null;
    todosEventos.forEach(function (e) {
        if (!mvp || e.nota > mvp.nota) mvp = e;
    });
    if (mvp) mvp.mvpOtorgado = true;

    // Injury generation
    function generarLesiones(jugadores) {
        jugadores.forEach(function (j) {
            if (!j) return;
            var prob = 0.02;
            var stam = (j.stamina !== undefined && j.stamina !== null) ? j.stamina : 100;
            if (stam < 15) prob = 0.08;
            else if (stam < 30) prob = 0.05;
            if (Math.random() < prob) {
                var partidos = 1 + Math.floor(Math.random() * 4);
                j.lesionado = (j.lesionado || 0) + partidos;
            }
        });
    }
    generarLesiones(todosTitularesLocales);
    generarLesiones(todosTitularesVisit);

    return {
        golesLocal: golesLocal,
        golesVisit: golesVisit,
        eventosLocal: eventosLocal,
        eventosVisit: eventosVisit,
        sustitucionesLocal: sustitucionesLocal,
        sustitucionesVisit: sustitucionesVisit,
        mvp: mvp,
        formacionLocal: alineacionLocal.formacion,
        formacionVisit: alineacionVisit.formacion,
        poderLocal: poderLocal,
        poderVisit: poderVisit
    };
}

function actualizarEstadisticasJugador(jugador, datosPartido) {
    if (!jugador) return;
    if (!jugador.estadisticas) {
        jugador.estadisticas = { pj: 0, goles: 0, asistencias: 0, amarillas: 0, rojas: 0, mvp: 0 };
    }
    if (!jugador.historialPartidos) {
        jugador.historialPartidos = [];
    }
    jugador.estadisticas.pj = (jugador.estadisticas.pj || 0) + 1;
    jugador.estadisticas.goles = (jugador.estadisticas.goles || 0) + (datosPartido.goles || 0);
    jugador.estadisticas.asistencias = (jugador.estadisticas.asistencias || 0) + (datosPartido.asistencias || 0);
    jugador.estadisticas.amarillas = (jugador.estadisticas.amarillas || 0) + (datosPartido.amarillas || 0);
    jugador.estadisticas.rojas = (jugador.estadisticas.rojas || 0) + (datosPartido.rojas || 0);
    if (datosPartido.mvp) {
        jugador.estadisticas.mvp = (jugador.estadisticas.mvp || 0) + 1;
    }
    jugador.historialPartidos.push({
        jornada: datosPartido.jornada || jornadaActual,
        rival: datosPartido.rival || "Rival",
        minutos: datosPartido.minutos || 90,
        nota: datosPartido.nota || 6.0,
        acciones: datosPartido.acciones || []
    });
}

function simularOtrosPartidosJornada(jornada, nombreUsuario) {
    var resultadosOtros = [];
    for (var i = 0; i < calendarioLiga.length; i++) {
        var p = calendarioLiga[i];
        if (p.jornada !== jornada || p.jugado) continue;
        if (p.local.nombre === nombreUsuario || p.visitante.nombre === nombreUsuario) continue;

        var alinLocal = obtenerAlineacionIA(p.local.nombre);
        var alinVisit = obtenerAlineacionIA(p.visitante.nombre);
        if (!alinLocal || !alinVisit) continue;

        var res = simularPartidoCompleto(alinLocal, alinVisit, p.local.nombre, p.visitante.nombre, false);

        p.jugado = true;
        p.resultado = res.golesLocal + " - " + res.golesVisit;
        p.golesLocal = res.golesLocal;
        p.golesRival = res.golesVisit;

        // Update standings
        var localEq = laLigaClasificacion.find(function (e) { return e.nombre === p.local.nombre; });
        var visitEq = laLigaClasificacion.find(function (e) { return e.nombre === p.visitante.nombre; });
        if (localEq) { localEq.pj = (localEq.pj || 0) + 1; localEq.gf = (localEq.gf || 0) + res.golesLocal; localEq.gc = (localEq.gc || 0) + res.golesVisit; localEq.dg = localEq.gf - localEq.gc; }
        if (visitEq) { visitEq.pj = (visitEq.pj || 0) + 1; visitEq.gf = (visitEq.gf || 0) + res.golesVisit; visitEq.gc = (visitEq.gc || 0) + res.golesLocal; visitEq.dg = visitEq.gf - visitEq.gc; }
        if (res.golesLocal > res.golesVisit) {
            if (localEq) { localEq.pts = (localEq.pts || 0) + 3; localEq.pg = (localEq.pg || 0) + 1; }
            if (visitEq) { visitEq.pp = (visitEq.pp || 0) + 1; }
        } else if (res.golesVisit > res.golesLocal) {
            if (visitEq) { visitEq.pts = (visitEq.pts || 0) + 3; visitEq.pg = (visitEq.pg || 0) + 1; }
            if (localEq) { localEq.pp = (localEq.pp || 0) + 1; }
        } else {
            if (localEq) { localEq.pts = (localEq.pts || 0) + 1; localEq.pe = (localEq.pe || 0) + 1; }
            if (visitEq) { visitEq.pts = (visitEq.pts || 0) + 1; visitEq.pe = (visitEq.pe || 0) + 1; }
        }

        // Update stats for all players in this match
        function actualizarPlantilla(equipoNombre, eventosArr) {
            var plantilla = mercadoTodasLasPlantillas[equipoNombre] || [];
            eventosArr.forEach(function (ev) {
                var jug = plantilla.find(function (j) { return j.nombre === ev.jugador.nombre; });
                // Also check user's plantilla if it's the user's team
                if (!jug && equipoNombre === nombreUsuario) {
                    jug = plantillaActual.find(function (j) { return j.nombre === ev.jugador.nombre; });
                }
                if (jug) {
                    actualizarEstadisticasJugador(jug, {
                        jornada: jornada,
                        rival: p.local.nombre === equipoNombre ? p.visitante.nombre : p.local.nombre,
                        minutos: ev.minutos,
                        nota: ev.nota,
                        goles: ev.goles,
                        asistencias: ev.asistencias,
                        amarillas: ev.amarilla ? 1 : 0,
                        rojas: ev.roja ? 1 : 0,
                        mvp: ev.mvpOtorgado || false,
                        acciones: ev.acciones
                    });
                }
            });
        }

        actualizarPlantilla(p.local.nombre, res.eventosLocal);
        actualizarPlantilla(p.visitante.nombre, res.eventosVisit);

        resultadosOtros.push({ local: p.local.nombre, visitante: p.visitante.nombre, gl: res.golesLocal, gv: res.golesVisit });
    }
    return resultadosOtros;
}

// ==========================================================================
// LEAGUE STATISTICS (Pichichi, Zamora, MVP, Asistencias)
// ==========================================================================

function calcularEstadisticasLiga() {
    var stats = { pichichi: [], asistencias: [], zamora: [], mvp: [] };
    for (var eq in mercadoTodasLasPlantillas) {
        var plantilla = mercadoTodasLasPlantillas[eq];
        if (!plantilla) continue;
        plantilla.forEach(function (j) {
            if (!j.estadisticas || j.estadisticas.pj === 0) return;
            stats.pichichi.push({ nombre: j.nombre, equipo: eq, valor: j.estadisticas.goles || 0, pj: j.estadisticas.pj });
            stats.asistencias.push({ nombre: j.nombre, equipo: eq, valor: j.estadisticas.asistencias || 0 });
            stats.mvp.push({ nombre: j.nombre, equipo: eq, valor: j.estadisticas.mvp || 0 });
            if ((j.posicion || "").toUpperCase() === "POR") {
                var gc = j.estadisticas.golesEncajados || 0;
                stats.zamora.push({ nombre: j.nombre, equipo: eq, valor: gc, pj: j.estadisticas.pj, media: j.estadisticas.pj > 0 ? (gc / j.estadisticas.pj).toFixed(2) : 99 });
            }
        });
    }
    stats.pichichi.sort(function (a, b) { return b.valor - a.valor; });
    stats.asistencias.sort(function (a, b) { return b.valor - a.valor; });
    stats.mvp.sort(function (a, b) { return b.valor - a.valor; });
    stats.zamora.sort(function (a, b) { return parseFloat(a.media || 99) - parseFloat(b.media || 99); });
    return stats;
}

function abrirEstadisticasLiga() {
    var modal = document.getElementById("modal-estadisticas-liga");
    if (!modal) return;
    modal.classList.add("activo");

    var stats = calcularEstadisticasLiga();

    // Setup tab switching
    document.querySelectorAll(".est-tab").forEach(function (btn) {
        btn.onclick = function () {
            document.querySelectorAll(".est-tab").forEach(function (b) { b.classList.remove("activo"); });
            this.classList.add("activo");
            renderizarEstTab(this.dataset.est, stats);
        };
    });

    // Show first tab
    var firstTab = document.querySelector(".est-tab");
    if (firstTab) {
        document.querySelectorAll(".est-tab").forEach(function (b) { b.classList.remove("activo"); });
        firstTab.classList.add("activo");
        renderizarEstTab(firstTab.dataset.est, stats);
    }
}

function renderizarEstTab(tab, stats) {
    var data = stats[tab] || [];
    var titulos = { pichichi: "⚽ Pichichi — Máximos goleadores", asistencias: "🅰️ Máximos asistentes", mvp: "⭐ MVP de la temporada", zamora: "🧤 Trofeo Zamora — Menos goleados" };
    var header = titulos[tab] || "Estadísticas";
    var html = '<h4 style="font-size:13px;color:#111;margin:0 0 6px;text-align:center;font-weight:700">' + header + '</h4>';

    if (data.length === 0) {
        html += '<p style="color:#888;font-size:12px;text-align:center;padding:10px">Aún no hay datos. Juega partidos para generar estadísticas.</p>';
        document.getElementById("est-contenido").innerHTML = html;
        return;
    }

    var top = data.slice(0, 15);
    top.forEach(function (item, idx) {
        var pos = idx + 1;
        var medalla = pos === 1 ? "🥇" : pos === 2 ? "🥈" : pos === 3 ? "🥉" : pos + "º";
        var valorStr = tab === "zamora" ? item.media + " g/p" : item.valor;
        html += '<div class="est-fila">' +
            '<span class="est-pos">' + medalla + '</span>' +
            '<span class="est-nombre">' + item.nombre + '<br><span class="est-equipo">' + item.equipo + '</span></span>' +
            '<span class="est-valor">' + valorStr + '</span>' +
            '</div>';
    });
    document.getElementById("est-contenido").innerHTML = html;
}

function cerrarEstadisticasLiga() {
    var modal = document.getElementById("modal-estadisticas-liga");
    if (modal) modal.classList.remove("activo");
}

// ==========================================================================
// MATCH SIMULATION ANIMATION (live minute-by-minute)
// ==========================================================================

function generarEventosAnimados(resultado, partido, esLocal) {
    var eventos = [];
    var golesAcum = { local: 0, visit: 0 };
    var idxGL = 0, idxGV = 0;
    var arrGolesLocal = resultado.eventosLocal.reduce(function (acc, ev) {
        for (var i = 0; i < (ev.goles || 0); i++) acc.push(ev.jugador);
        return acc;
    }, []);
    var arrGolesVisit = resultado.eventosVisit.reduce(function (acc, ev) {
        for (var i = 0; i < (ev.goles || 0); i++) acc.push(ev.jugador);
        return acc;
    }, []);

    // Assign random minutes to each goal (1-90, sorted)
    var minsGolesL = arrGolesLocal.map(function (j) { return Math.floor(Math.random() * 85) + 2; }).sort(function (a, b) { return a - b; });
    var minsGolesV = arrGolesVisit.map(function (j) { return Math.floor(Math.random() * 85) + 2; }).sort(function (a, b) { return a - b; });

    // Yellow cards (pick random minutes)
    var minsAmarillas = {};
    [resultado.eventosLocal, resultado.eventosVisit].forEach(function (evArr) {
        evArr.forEach(function (ev) {
            if (ev.amarilla && !ev.roja) {
                minsAmarillas[ev.jugador.nombre] = Math.floor(Math.random() * 80) + 5;
            }
        });
    });

    // Red cards
    var minsRojas = {};
    [resultado.eventosLocal, resultado.eventosVisit].forEach(function (evArr) {
        evArr.forEach(function (ev) {
            if (ev.roja) {
                minsRojas[ev.jugador.nombre] = 50 + Math.floor(Math.random() * 35);
            }
        });
    });

    // Substitutions (use actual ones if available)
    var sustituciones = (esLocal ? resultado.sustitucionesLocal : resultado.sustitucionesVisit) || [];
    var sustitucionesRival = (esLocal ? resultado.sustitucionesVisit : resultado.sustitucionesLocal) || [];

    // Build minute-sorted event list
    for (var min = 1; min <= 90; min++) {
        // Goals local
        for (var gl = 0; gl < minsGolesL.length; gl++) {
            if (minsGolesL[gl] === min) {
                golesAcum.local++;
                var nombreL = arrGolesLocal[gl] ? arrGolesLocal[gl].nombre.split(" ").pop() : "?";
                eventos.push({ minuto: min, texto: "⚽ GOOOL de " + nombreL + " (" + golesAcum.local + "-" + golesAcum.visit + ")", tipo: "gol", gl: golesAcum.local, gv: golesAcum.visit });
            }
        }
        // Goals visit
        for (var gv = 0; gv < minsGolesV.length; gv++) {
            if (minsGolesV[gv] === min) {
                golesAcum.visit++;
                var nombreV = arrGolesVisit[gv] ? arrGolesVisit[gv].nombre.split(" ").pop() : "?";
                eventos.push({ minuto: min, texto: "⚽ GOOOL de " + nombreV + " (" + golesAcum.local + "-" + golesAcum.visit + ")", tipo: "gol", gl: golesAcum.local, gv: golesAcum.visit });
            }
        }
        // Yellow cards
        for (var ya in minsAmarillas) {
            if (minsAmarillas[ya] === min) {
                eventos.push({ minuto: min, texto: "🟨 Tarjeta amarilla para " + ya, tipo: "tarjeta-amarilla" });
            }
        }
        // Red cards
        for (var rj in minsRojas) {
            if (minsRojas[rj] === min) {
                eventos.push({ minuto: min, texto: "🟥 ¡Tarjeta roja! " + rj + " es expulsado", tipo: "tarjeta-roja" });
            }
        }
        // Substitutions user
        sustituciones.forEach(function (s) {
            if (s.minuto === min) {
                eventos.push({ minuto: min, texto: "🔄 Cambio: " + s.sale.nombre.split(" ").pop() + " ← " + s.entra.nombre.split(" ").pop(), tipo: "sustitucion" });
            }
        });
        // Substitutions rival
        sustitucionesRival.forEach(function (s) {
            if (s.minuto === min) {
                eventos.push({ minuto: min, texto: "🔄 Cambio " + s.equipo + ": " + s.sale.nombre.split(" ").pop() + " ← " + s.entra.nombre.split(" ").pop(), tipo: "sustitucion" });
            }
        });
        // Milestones
        if (min === 1) {
            eventos.push({ minuto: 1, texto: "⏱️ ¡Comienza el partido!", tipo: "inicio" });
        }
        if (min === 45) {
            eventos.push({ minuto: 45, texto: "⏸️ Descanso. " + golesAcum.local + "-" + golesAcum.visit, tipo: "descanso" });
        }
        if (min === 90) {
            eventos.push({ minuto: 90, texto: "⏹️ ¡Final del partido! " + golesAcum.local + "-" + golesAcum.visit, tipo: "final" });
        }
    }
    return eventos;
}

function simularYAnimarPartido(resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados) {
    var modal = document.getElementById("modal-simulacion-partido");
    if (!modal) {
        mostrarResultadoPartido(resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados);
        return;
    }

    document.getElementById("sim-equipo-local").innerText = partido.local.nombre;
    document.getElementById("sim-equipo-visit").innerText = partido.visitante.nombre;
    document.getElementById("sim-marcador").innerText = "0 - 0";
    document.getElementById("sim-crono").innerText = "00:00";
    var eventosDiv = document.getElementById("sim-eventos");
    eventosDiv.innerHTML = "";
    document.getElementById("sim-acciones").innerHTML = '<button class="neg-btn-secundario" onclick="saltarSimulacion()">⏩ Saltar</button>';
    modal.classList.add("activo");

    var eventos = generarEventosAnimados(resultado, partido, esLocal);
    var minActual = 0;
    var eventosIdx = 0;
    window.simSkip = false;

    window.simInterval = setInterval(function () {
        minActual++;
        var mins = Math.floor(minActual / 60);
        var segs = minActual % 60;
        document.getElementById("sim-crono").innerText = mins + ":" + (segs < 10 ? "0" : "") + segs;

        while (eventosIdx < eventos.length && eventos[eventosIdx].minuto <= minActual) {
            var ev = eventos[eventosIdx];
            var div = document.createElement("div");
            div.className = "sim-evento sim-" + ev.tipo;
            div.innerText = ev.texto;
            eventosDiv.appendChild(div);
            eventosDiv.scrollTop = eventosDiv.scrollHeight;
            if (ev.tipo === "gol") {
                document.getElementById("sim-marcador").innerText = ev.gl + " - " + ev.gv;
            }
            eventosIdx++;
        }

        if (window.simSkip) {
            // Fast-forward: show all remaining events at once
            while (eventosIdx < eventos.length) {
                var ev2 = eventos[eventosIdx];
                var div2 = document.createElement("div");
                div2.className = "sim-evento sim-" + ev2.tipo;
                div2.innerText = ev2.texto;
                eventosDiv.appendChild(div2);
                if (ev2.tipo === "gol") {
                    document.getElementById("sim-marcador").innerText = ev2.gl + " - " + ev2.gv;
                }
                eventosIdx++;
            }
            eventosDiv.scrollTop = eventosDiv.scrollHeight;
            document.getElementById("sim-crono").innerText = "90:00";
            clearInterval(window.simInterval);
            window.simInterval = null;
            document.getElementById("sim-acciones").innerHTML = '<button class="neg-btn-aceptar" onclick="finalizarSimulacionYMostrarResultado()">📋 Ver resultado final</button>';
            return;
        }

        if (minActual >= 90) {
            clearInterval(window.simInterval);
            window.simInterval = null;
            document.getElementById("sim-acciones").innerHTML = '<button class="neg-btn-aceptar" onclick="finalizarSimulacionYMostrarResultado()">📋 Ver resultado final</button>';
        }
    }, 180);
}

function saltarSimulacion() {
    window.simSkip = true;
}

function finalizarSimulacionYMostrarResultado() {
    if (window.simInterval) {
        clearInterval(window.simInterval);
        window.simInterval = null;
    }
    var modal = document.getElementById("modal-simulacion-partido");
    if (modal) modal.classList.remove("activo");
    mostrarResultadoPartido.apply(null, window.simDatosPartido || []);
}

// Store data for final callback
window.simDatosPartido = null;

// Override the animation start to store data
var _originalStart = simularYAnimarPartido;
simularYAnimarPartido = function (resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados) {
    window.simDatosPartido = [resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados];
    _originalStart(resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados);
};

// ==========================================================================
// STAMINA SYSTEM
// ==========================================================================

function aplicarDesgasteFisico(eventosUsr, eventosRival, nombreRival) {
    var posicionDrain = {
        "POR": 10, "PO": 10,
        "DFC": 22, "LD": 25, "LI": 25, "CAD": 25, "CAI": 25,
        "MCD": 28, "MC": 32, "MCO": 32, "MI": 32, "MD": 32,
        "ED": 28, "EI": 28, "DC": 25
    };

    var tactica = window.tacticaEquipo || "";
    var tMod = 1.0;
    if (tactica === "ataque_total") tMod = 1.25;
    else if (tactica === "presion_alta") tMod = 1.20;
    else if (tactica === "canales") tMod = 1.10;
    else if (tactica === "mantener_balon") tMod = 0.95;
    else if (tactica === "contraataque") tMod = 0.90;
    else if (tactica === "desde_atras") tMod = 0.85;
    else if (tactica === "autobus") tMod = 0.75;

    function initStamina(j) {
        if (j.stamina === undefined || j.stamina === null) j.stamina = 100;
    }
    function drain(j, minutos) {
        initStamina(j);
        var pos = (j.posicion || "").toUpperCase();
        var base = posicionDrain[pos] || 25;
        var perdida = base * tMod * (minutos / 90);
        j.stamina = Math.max(0, Math.min(100, j.stamina - perdida));
    }

    var jugaron = {};
    eventosUsr.forEach(function (ev) {
        drain(ev.jugador, ev.minutos);
        jugaron[ev.jugador.nombre] = true;
    });
    eventosRival.forEach(function (ev) {
        drain(ev.jugador, ev.minutos);
        jugaron[ev.jugador.nombre] = true;
    });

    // Recovery for non-players
    function recover(j) {
        initStamina(j);
        if (!jugaron[j.nombre]) {
            j.stamina = Math.min(100, (j.stamina || 100) + 20);
        }
    }
    plantillaActual.forEach(recover);
    var plantillaRival = mercadoTodasLasPlantillas[nombreRival] || [];
    plantillaRival.forEach(recover);
}

// ==========================================================================
// SQUAD FILLER FOR AI TEAMS
// ==========================================================================

function generarJugadorGenerico(posForzada) {
    var posicionesPool = ["POR", "DFC", "LD", "LI", "MCD", "MC", "MCO", "DC", "ED", "EI"];
    var pos = posForzada || posicionesPool[Math.floor(Math.random() * posicionesPool.length)];
    var nombres = ["Álex", "Carlos", "David", "Javier", "Miguel", "Pablo", "Sergio", "Víctor", "Raúl", "Adrián"];
    var apellidos = ["López", "Martín", "García", "Rodríguez", "Fernández", "Sánchez", "Díaz", "Torres", "Ruiz", "Moreno"];
    return {
        id: 900000 + Math.floor(Math.random() * 99000),
        nombre: nombres[Math.floor(Math.random() * nombres.length)] + " " + apellidos[Math.floor(Math.random() * apellidos.length)],
        posicion: pos,
        nacionalidad: "🇪🇸",
        edad: 18 + Math.floor(Math.random() * 5),
        valor: (200 + Math.floor(Math.random() * 500)) + "K",
        salario: "4K",
        poder: 45 + Math.floor(Math.random() * 15),
        pierna: Math.random() < 0.5 ? "DER" : "IZQ",
        rating: 45 + Math.floor(Math.random() * 15),
        stamina: 100,
        foto: "img/jugadores/67849.jpg",
        estadisticas: { pj: 0, goles: 0, asistencias: 0, amarillas: 0, rojas: 0, mvp: 0 },
        historialPartidos: []
    };
}

function rellenarPlantillasIA() {
    for (var eq in mercadoTodasLasPlantillas) {
        var plantilla = mercadoTodasLasPlantillas[eq] || [];
        var disponibles = plantilla.filter(function (j) {
            return j && !j.sancion && !j.lesionado;
        });
        if (disponibles.length >= 16) continue;
        var necesarios = 16 - disponibles.length;
        for (var n = 0; n < necesarios; n++) {
            plantilla.push(generarJugadorGenerico());
        }
    }
}

// ==========================================================================
// END-OF-SEASON DEVELOPMENT
// ==========================================================================

function aplicarDesarrolloAnual() {
    function process(jugadores) {
        jugadores.forEach(function (j) {
            if (!j) return;
            j.edad = (j.edad || 0) + 1;

            var pj = j.estadisticas ? (j.estadisticas.pj || 0) : 0;
            var avgNota = 0;
            if (pj > 0 && j.historialPartidos && j.historialPartidos.length > 0) {
                var suma = 0;
                j.historialPartidos.forEach(function (h) { suma += (h.nota || 5.0); });
                avgNota = suma / j.historialPartidos.length;
            }

            var basePoder = j.poder || j.rating || 50;

            if (pj === 0) {
                if (j.edad < 30) {
                    j.poder = Math.max(1, Math.min(99, basePoder - 1));
                } else {
                    j.poder = Math.max(1, Math.min(99, basePoder - 3));
                }
                if (j.rating !== undefined) j.rating = j.poder;
                return;
            }

            var factorPartidos = Math.min(pj, 38) / 38;
            var factorRendimiento = Math.max(0, Math.min(1, (avgNota - 5.0) / 3.0));

            if (j.edad < 30) {
                var ganancia = 1 + Math.round(factorPartidos * 2 + factorRendimiento * 2 + (Math.random() - 0.5));
                j.poder = Math.max(1, Math.min(99, basePoder + ganancia));
            } else {
                var perdida = -1 + Math.round(factorPartidos * 1 + factorRendimiento * 1 + (Math.random() - 0.5));
                perdida = Math.max(-5, Math.min(0, perdida));
                j.poder = Math.max(1, Math.min(99, basePoder + perdida));
            }
            if (j.rating !== undefined) j.rating = j.poder;
        });
    }

    process(plantillaActual);
    for (var eq in mercadoTodasLasPlantillas) {
        process(mercadoTodasLasPlantillas[eq]);
    }
    for (var i = 0; i < laLigaClasificacion.length; i++) {
        if (laLigaClasificacion[i].jugadores) process(laLigaClasificacion[i].jugadores);
    }
}

function mostrarResultadoPartido(resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados) {
    var golesLocal = resultado.golesLocal;
    var golesVisit = resultado.golesVisit;
    var eventosUsr = esLocal ? resultado.eventosLocal : resultado.eventosVisit;
    var eventosRival = esLocal ? resultado.eventosVisit : resultado.eventosLocal;

    var html = '<div style="text-align:center;padding:10px 0">' +
        '<div style="font-size:13px;color:#888;margin-bottom:4px">Jornada ' + jornadaActual + ' · Resultado</div>' +
        '<div style="display:flex;align-items:center;justify-content:center;gap:12px;margin:8px 0">' +
            '<div style="text-align:right;flex:1"><strong style="font-size:16px;color:#111">' + partido.local.nombre + '</strong></div>' +
            '<div style="font-size:32px;font-weight:800;color:#3B811F;min-width:80px;text-align:center">' + golesLocal + ' - ' + golesVisit + '</div>' +
            '<div style="text-align:left;flex:1"><strong style="font-size:16px;color:#111">' + partido.visitante.nombre + '</strong></div>' +
        '</div>';

    // Goalscorers
    var goleadores = [];
    eventosUsr.forEach(function (ev) {
        if (ev.goles > 0) goleadores.push({ nombre: ev.jugador.nombre, goles: ev.goles, equipo: nombreUsr });
    });
    eventosRival.forEach(function (ev) {
        if (ev.goles > 0) goleadores.push({ nombre: ev.jugador.nombre, goles: ev.goles, equipo: rivalNombre });
    });
    if (goleadores.length > 0) {
        html += '<div style="font-size:12px;color:#555;margin:4px 0 8px">⚽ ';
        goleadores.forEach(function (g, idx) {
            if (idx > 0) html += ' · ';
            html += g.nombre + ' (' + g.goles + ')';
            if (g.equipo === nombreUsr) html += ' 🟢';
        });
        html += '</div>';
    }

    // MVP
    if (resultado.mvp) {
        html += '<div style="font-size:12px;color:#e67e22;margin-bottom:8px">⭐ MVP: <strong>' + resultado.mvp.jugador.nombre + '</strong> (' + resultado.mvp.nota + ')</div>';
    }

    // User player ratings table
    html += '<div style="margin-top:6px"><h4 style="font-size:12px;color:#111;margin:0 0 4px;font-weight:700">TUS JUGADORES</h4>' +
        '<table style="width:100%;font-size:11px;border-collapse:collapse">' +
        '<thead><tr style="background:#f5f5f5"><th style="padding:4px;text-align:left">Jugador</th><th style="padding:4px;text-align:center">Nota</th><th style="padding:4px;text-align:center">G</th><th style="padding:4px;text-align:center">A</th><th style="padding:4px;text-align:center">TA</th><th style="padding:4px;text-align:center">TR</th></tr></thead><tbody>';
    eventosUsr.forEach(function (ev) {
        var notaClase = ev.nota >= 7.5 ? "#3B811F" : ev.nota >= 6 ? "#e67e22" : "#d32f2f";
        html += '<tr style="border-bottom:1px solid #f0f0f0">' +
            '<td style="padding:4px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px">' + ev.jugador.nombre.split(" ").pop() + '</td>' +
            '<td style="padding:4px;text-align:center;font-weight:700;color:' + notaClase + '">' + ev.nota + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.goles || "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.asistencias || "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.amarilla ? "🟨" : "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.roja ? "🟥" : "-") + '</td>' +
            '</tr>';
    });
    html += '</tbody></table></div>';

    // Rival player ratings table
    html += '<div style="margin-top:6px"><h4 style="font-size:12px;color:#111;margin:0 0 4px;font-weight:700">' + rivalNombre + '</h4>' +
        '<table style="width:100%;font-size:11px;border-collapse:collapse">' +
        '<thead><tr style="background:#f5f5f5"><th style="padding:4px;text-align:left">Jugador</th><th style="padding:4px;text-align:center">Nota</th><th style="padding:4px;text-align:center">G</th><th style="padding:4px;text-align:center">A</th><th style="padding:4px;text-align:center">TA</th><th style="padding:4px;text-align:center">TR</th></tr></thead><tbody>';
    eventosRival.forEach(function (ev) {
        var notaClase = ev.nota >= 7.5 ? "#3B811F" : ev.nota >= 6 ? "#e67e22" : "#d32f2f";
        html += '<tr style="border-bottom:1px solid #f0f0f0">' +
            '<td style="padding:4px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100px">' + ev.jugador.nombre.split(" ").pop() + '</td>' +
            '<td style="padding:4px;text-align:center;font-weight:700;color:' + notaClase + '">' + ev.nota + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.goles || "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.asistencias || "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.amarilla ? "🟨" : "-") + '</td>' +
            '<td style="padding:4px;text-align:center">' + (ev.roja ? "🟥" : "-") + '</td>' +
            '</tr>';
    });
    html += '</tbody></table></div>';

    // Other results
    if (otrosResultados && otrosResultados.length > 0) {
        html += '<div style="margin-top:10px"><h4 style="font-size:12px;color:#111;margin:0 0 4px;font-weight:700">RESULTADOS DE LA JORNADA</h4></div>';
        otrosResultados.forEach(function (r) {
            html += '<div style="display:flex;align-items:center;gap:6px;padding:4px 0;border-bottom:1px solid #f8f8f8;font-size:11px">' +
                '<span style="flex:1;text-align:right;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + r.local + '</span>' +
                '<span style="font-weight:700;color:#3B811F;min-width:40px;text-align:center">' + r.gl + '-' + r.gv + '</span>' +
                '<span style="flex:1;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + r.visitante + '</span>' +
                '</div>';
        });
    }

    html += '<button class="neg-btn-aceptar" onclick="cerrarResultadoPartido()" style="margin-top:12px">Continuar →</button></div>';

    var modal = document.getElementById("modal-resultado-partido");
    var contenido = document.getElementById("resultado-contenido");
    if (modal && contenido) {
        contenido.innerHTML = html;
        modal.classList.add("activo");
    } else {
        // Fallback if modal elements don't exist
        renderizarOficina();
        renderizarEconomia();
    }
}

function cerrarResultadoPartido() {
    var modal = document.getElementById("modal-resultado-partido");
    if (modal) modal.classList.remove("activo");
    renderizarOficina();
    renderizarEconomia();
}

function jugarJornada() {
    if (!equipoSeleccionado) {
        alert("Selecciona un club antes de jugar.");
        return;
    }

    var nombreUsr = equipoSeleccionado.nombre;
    var partidoIdx = -1;
    for (var i = 0; i < calendarioLiga.length; i++) {
        var p = calendarioLiga[i];
        if (p.jornada === jornadaActual && !p.jugado && (p.local.nombre === nombreUsr || p.visitante.nombre === nombreUsr)) {
            partidoIdx = i;
            break;
        }
    }
    if (partidoIdx < 0) {
        alert("No hay partido disponible para esta jornada.");
        return;
    }

    var partido = calendarioLiga[partidoIdx];
    var esLocal = partido.local.nombre === nombreUsr;
    var rivalNombre = esLocal ? partido.visitante.nombre : partido.local.nombre;

    // Get user's lineup from tactics
    var titularesUsr = [];
    for (var ti = 0; ti < 11; ti++) {
        var jid = tacticaGuardada.titulares[ti];
        var jug = null;
        if (jid) jug = plantillaActual.find(function (j) { return (j.id === jid || j.id === Number(jid)) && !j.sancion && !j.lesionado; });
        titularesUsr.push(jug || null);
    }
    // Fill empty non-POR slots with best available player
    var idsUsados = {};
    titularesUsr.forEach(function (j) { if (j) idsUsados[j.id || j.nombre] = true; });
    for (var ti2 = 0; ti2 < titularesUsr.length; ti2++) {
        if (!titularesUsr[ti2] && ti2 > 0) {
            var reemplazo = plantillaActual.find(function (j) {
                return !idsUsados[j.id || j.nombre] && !j.sancion && !j.lesionado && (j.posicion || "").toUpperCase() !== "POR";
            });
            if (reemplazo) { titularesUsr[ti2] = reemplazo; idsUsados[reemplazo.id || reemplazo.nombre] = true; }
        }
    }
    var suplentesUsr = plantillaActual.filter(function (j) { return titularesUsr.indexOf(j) < 0; });
    var alineacionUsr = { titulares: titularesUsr, sustitutos: suplentesUsr, formacion: tacticaGuardada.formacion || "4-3-3" };

    // Get AI lineup
    var alineacionRival = obtenerAlineacionIA(rivalNombre);
    if (!alineacionRival) {
        alert("No se pudo obtener la alineación del rival.");
        return;
    }

    // Simulate match
    var resLocal = esLocal ? alineacionUsr : alineacionRival;
    var resVisit = esLocal ? alineacionRival : alineacionUsr;
    var resultado = simularPartidoCompleto(resLocal, resVisit, partido.local.nombre, partido.visitante.nombre, true);

    // Store result in calendar
    partido.jugado = true;
    partido.resultado = resultado.golesLocal + " - " + resultado.golesVisit;
    partido.golesLocal = resultado.golesLocal;
    partido.golesRival = resultado.golesVisit;

    // Update standings for user's match
    var localEq = laLigaClasificacion.find(function (e) { return e.nombre === partido.local.nombre; });
    var visitEq = laLigaClasificacion.find(function (e) { return e.nombre === partido.visitante.nombre; });
    if (localEq) { localEq.pj = (localEq.pj || 0) + 1; localEq.gf = (localEq.gf || 0) + resultado.golesLocal; localEq.gc = (localEq.gc || 0) + resultado.golesVisit; localEq.dg = localEq.gf - localEq.gc; }
    if (visitEq) { visitEq.pj = (visitEq.pj || 0) + 1; visitEq.gf = (visitEq.gf || 0) + resultado.golesVisit; visitEq.gc = (visitEq.gc || 0) + resultado.golesLocal; visitEq.dg = visitEq.gf - visitEq.gc; }
    if (resultado.golesLocal > resultado.golesVisit) {
        if (localEq) { localEq.pts = (localEq.pts || 0) + 3; localEq.pg = (localEq.pg || 0) + 1; }
        if (visitEq) { visitEq.pp = (visitEq.pp || 0) + 1; }
    } else if (resultado.golesVisit > resultado.golesLocal) {
        if (visitEq) { visitEq.pts = (visitEq.pts || 0) + 3; visitEq.pg = (visitEq.pg || 0) + 1; }
        if (localEq) { localEq.pp = (localEq.pp || 0) + 1; }
    } else {
        if (localEq) { localEq.pts = (localEq.pts || 0) + 1; localEq.pe = (localEq.pe || 0) + 1; }
        if (visitEq) { visitEq.pts = (visitEq.pts || 0) + 1; visitEq.pe = (visitEq.pe || 0) + 1; }
    }

    // Update user player stats
    var eventosUsr = esLocal ? resultado.eventosLocal : resultado.eventosVisit;
    var rivalName = esLocal ? partido.visitante.nombre : partido.local.nombre;
    eventosUsr.forEach(function (ev) {
        var jug = plantillaActual.find(function (j) { return j.nombre === ev.jugador.nombre; });
        if (jug) {
            actualizarEstadisticasJugador(jug, {
                jornada: jornadaActual,
                rival: rivalName,
                minutos: ev.minutos,
                nota: ev.nota,
                goles: ev.goles,
                asistencias: ev.asistencias,
                amarillas: ev.amarilla ? 1 : 0,
                rojas: ev.roja ? 1 : 0,
                mvp: ev.mvpOtorgado || false,
                acciones: ev.acciones
            });
        }
    });

    // Update rival player stats
    var plantillaRival = mercadoTodasLasPlantillas[rivalNombre] || [];
    var eventosRival = esLocal ? resultado.eventosVisit : resultado.eventosLocal;
    eventosRival.forEach(function (ev) {
        var jug = plantillaRival.find(function (j) { return j.nombre === ev.jugador.nombre; });
        if (jug) {
            actualizarEstadisticasJugador(jug, {
                jornada: jornadaActual,
                rival: nombreUsr,
                minutos: ev.minutos,
                nota: ev.nota,
                goles: ev.goles,
                asistencias: ev.asistencias,
                amarillas: ev.amarilla ? 1 : 0,
                rojas: ev.roja ? 1 : 0,
                mvp: ev.mvpOtorgado || false,
                acciones: ev.acciones
            });
        }
    });

    // Apply stamina drain/recovery
    aplicarDesgasteFisico(eventosUsr, eventosRival, rivalNombre);

    // Simulate other league matches
    var otrosResultados = simularOtrosPartidosJornada(jornadaActual, nombreUsr);

    // Ticket revenue if user played at home
    if (esLocal) {
        var equiposTop = ["Real Madrid", "FC Barcelona", "Atlético de Madrid"];
        var equiposMedios = ["Athletic Club", "Real Betis", "Real Sociedad", "Sevilla", "Valencia", "Villarreal"];
        var pctAsistencia;
        if (equiposTop.indexOf(rivalNombre) >= 0) {
            pctAsistencia = 0.95 + Math.random() * 0.05;
        } else if (equiposMedios.indexOf(rivalNombre) >= 0) {
            pctAsistencia = 0.75 + Math.random() * 0.15;
        } else {
            pctAsistencia = 0.60 + Math.random() * 0.20;
        }
        var recaudacionTotal = 0;
        for (var zk in estadioZonas) {
            var z = estadioZonas[zk];
            var espectadores = Math.round(z.asientos * pctAsistencia);
            recaudacionTotal += espectadores * z.precio;
        }
        presupuestoFichajes += recaudacionTotal;
        var registro = "Ingreso taquilla (vs " + rivalNombre + "): +" + recaudacionTotal.toLocaleString("es-ES") + "€  (J" + jornadaActual + ")";
        historialEconomia.unshift(registro);
    }

    // Update manager stats
    var ganamos = (esLocal && resultado.golesLocal > resultado.golesVisit) || (!esLocal && resultado.golesVisit > resultado.golesLocal);
    var empatamos = resultado.golesLocal === resultado.golesVisit;
    if (ganamos) {
        confianzaDirectiva = Math.min(100, confianzaDirectiva + 5);
    } else if (empatamos) {
        confianzaDirectiva = Math.min(100, confianzaDirectiva + 1);
    } else {
        confianzaDirectiva = Math.max(50, confianzaDirectiva - 5);
    }

    // Recalculate user position
    actualizarYOrdenarClasificacion();
    for (var posCi = 0; posCi < laLigaClasificacion.length; posCi++) {
        if (laLigaClasificacion[posCi].nombre === nombreUsr) {
            posicionActual = posCi + 1;
            break;
        }
    }

    // Increment jornada
    jornadaActual += 1;

    // Decrement suspensions for all players
    var jornadaJugada = jornadaActual - 1;
    if (jornadaJugada === 38) {
        aplicarDesarrolloAnual();
    }
    plantillaActual.forEach(function (j) {
        if (j.sancion && j.sancion > 0) j.sancion--;
        if (j.lesionado && j.lesionado > 0) j.lesionado--;
    });
    for (var eqS in mercadoTodasLasPlantillas) {
        (mercadoTodasLasPlantillas[eqS] || []).forEach(function (j) {
            if (j.sancion && j.sancion > 0) j.sancion--;
            if (j.lesionado && j.lesionado > 0) j.lesionado--;
        });
    }
    rellenarPlantillasIA();

    // Show match result
    mostrarResultadoPartido(resultado, partido, esLocal, nombreUsr, rivalNombre, otrosResultados);
}

// Permite volver atrás correctamente desde la pantalla de ligas
function volverAPaises() {
    seleccionarContinente(continenteSeleccionado);
}// ==========================================================================
// 4. SISTEMA DE NACIONALIDADES AUTOMÁTICO
// ==========================================================================

// Listado definitivo de nacionalidades con bandera
const nacionalidadesConBandera = [
    { bandera: "🇦🇫", nombre: "Afganistán" },
    { bandera: "🇦🇱", nombre: "Albania" },
    { bandera: "🇩🇪", nombre: "Alemania" },
    { bandera: "🇦🇩", nombre: "Andorra" },
    { bandera: "🇦🇴", nombre: "Angola" },
    { bandera: "🇸🇦", nombre: "Arabia Saudí" },
    { bandera: "🇩🇿", nombre: "Argelia" },
    { bandera: "🇦🇷", nombre: "Argentina" },
    { bandera: "🇦🇲", nombre: "Armenia" },
    { bandera: "🇦🇺", nombre: "Australia" },
    { bandera: "🇦🇹", nombre: "Austria" },
    { bandera: "🇦🇿", nombre: "Azerbaiyán" },
    { bandera: "🇧🇩", nombre: "Bangladés" },
    { bandera: "🇧🇪", nombre: "Bélgica" },
    { bandera: "🇧🇯", nombre: "Benín" },
    { bandera: "🇧🇾", nombre: "Bielorrusia" },
    { bandera: "🇧🇴", nombre: "Bolivia" },
    { bandera: "🇧🇦", nombre: "Bosnia y Herzegovina" },
    { bandera: "🇧🇼", nombre: "Botsuana" },
    { bandera: "🇧🇷", nombre: "Brasil" },
    { bandera: "🇧🇳", nombre: "Brunéi" },
    { bandera: "🇧🇬", nombre: "Bulgaria" },
    { bandera: "🇧🇫", nombre: "Burkina Faso" },
    { bandera: "🇰🇭", nombre: "Camboya" },
    { bandera: "🇨🇲", nombre: "Camerún" },
    { bandera: "🇨🇦", nombre: "Canadá" },
    { bandera: "🇶🇦", nombre: "Catar" },
    { bandera: "🇹🇩", nombre: "Chad" },
    { bandera: "🇨🇱", nombre: "Chile" },
    { bandera: "🇨🇳", nombre: "China" },
    { bandera: "🇨🇾", nombre: "Chipre" },
    { bandera: "🇨🇴", nombre: "Colombia" },
    { bandera: "🇰🇷", nombre: "Corea del Sur" },
    { bandera: "🇨🇮", nombre: "Costa de Marfil" },
    { bandera: "🇨🇷", nombre: "Costa Rica" },
    { bandera: "🇭🇷", nombre: "Croacia" },
    { bandera: "🇨🇺", nombre: "Cuba" },
    { bandera: "🇩🇰", nombre: "Dinamarca" },
    { bandera: "🇪🇨", nombre: "Ecuador" },
    { bandera: "🇪🇬", nombre: "Egipto" },
    { bandera: "🇸🇻", nombre: "El Salvador" },
    { bandera: "🇦🇪", nombre: "Emiratos Árabes Unidos" },
    { bandera: "🇸🇰", nombre: "Eslovaquia" },
    { bandera: "🇸🇮", nombre: "Eslovenia" },
    { bandera: "🇪🇸", nombre: "España" },
    { bandera: "🇺🇸", nombre: "Estados Unidos" },
    { bandera: "🇪🇪", nombre: "Estonia" },
    { bandera: "🇪🇹", nombre: "Etiopía" },
    { bandera: "🇵🇭", nombre: "Filipinas" },
    { bandera: "🇫🇮", nombre: "Finlandia" },
    { bandera: "🇫🇷", nombre: "Francia" },
    { bandera: "🇬🇦", nombre: "Gabón" },
    { bandera: "🇬🇲", nombre: "Gambia" },
    { bandera: "🇬🇪", nombre: "Georgia" },
    { bandera: "🇬🇭", nombre: "Ghana" },
    { bandera: "🇬🇷", nombre: "Grecia" },
    { bandera: "🇬🇹", nombre: "Guatemala" },
    { bandera: "🇬🇳", nombre: "Guinea" },
    { bandera: "🇭🇹", nombre: "Haití" },
    { bandera: "🇭🇳", nombre: "Honduras" },
    { bandera: "🇭🇺", nombre: "Hungría" },
    { bandera: "🇮🇳", nombre: "India" },
    { bandera: "🇮🇩", nombre: "Indonesia" },
    { bandera: "🇮🇷", nombre: "Irán" },
    { bandera: "🇮🇶", nombre: "Irak" },
    { bandera: "🇮🇪", nombre: "Irlanda" },
    { bandera: "🇮🇸", nombre: "Islandia" },
    { bandera: "🇮🇱", nombre: "Israel" },
    { bandera: "🇮🇹", nombre: "Italia" },
    { bandera: "🇯🇲", nombre: "Jamaica" },
    { bandera: "🇯🇵", nombre: "Japón" },
    { bandera: "🇯🇴", nombre: "Jordania" },
    { bandera: "🇰🇿", nombre: "Kazajistán" },
    { bandera: "🇰🇪", nombre: "Kenia" },
    { bandera: "🇰🇬", nombre: "Kirguistán" },
    { bandera: "🇽🇰", nombre: "Kosovo" },
    { bandera: "🇱🇻", nombre: "Letonia" },
    { bandera: "🇱🇧", nombre: "Líbano" },
    { bandera: "🇱🇹", nombre: "Lituania" },
    { bandera: "🇱🇺", nombre: "Luxemburgo" },
    { bandera: "🇲🇰", nombre: "Macedonia del Norte" },
    { bandera: "🇲🇾", nombre: "Malasia" },
    { bandera: "🇲🇱", nombre: "Malí" },
    { bandera: "🇲🇦", nombre: "Marruecos" },
    { bandera: "🇲🇽", nombre: "México" },
    { bandera: "🇲🇩", nombre: "Moldavia" },
    { bandera: "🇲🇪", nombre: "Montenegro" },
    { bandera: "🇲🇿", nombre: "Mozambique" },
    { bandera: "🇲🇲", nombre: "Myanmar" },
    { bandera: "🇳🇦", nombre: "Namibia" },
    { bandera: "🇳🇵", nombre: "Nepal" },
    { bandera: "🇳🇮", nombre: "Nicaragua" },
    { bandera: "🇳🇬", nombre: "Nigeria" },
    { bandera: "🇳🇴", nombre: "Noruega" },
    { bandera: "🇳🇿", nombre: "Nueva Zelanda" },
    { bandera: "🇳🇱", nombre: "Países Bajos" },
    { bandera: "🇵🇰", nombre: "Pakistán" },
    { bandera: "🇵🇦", nombre: "Panamá" },
    { bandera: "🇵🇾", nombre: "Paraguay" },
    { bandera: "🇵🇪", nombre: "Perú" },
    { bandera: "🇵🇱", nombre: "Polonia" },
    { bandera: "🇵🇹", nombre: "Portugal" },
    { bandera: "🇵🇷", nombre: "Puerto Rico" },
    { bandera: "🇬🇧", nombre: "Reino Unido" },
    { bandera: "🇨🇿", nombre: "República Checa" },
    { bandera: "🇩🇴", nombre: "República Dominicana" },
    { bandera: "🇷🇴", nombre: "Rumanía" },
    { bandera: "🇷🇺", nombre: "Rusia" },
    { bandera: "🇸🇳", nombre: "Senegal" },
    { bandera: "🇷🇸", nombre: "Serbia" },
    { bandera: "🇸🇬", nombre: "Singapur" },
    { bandera: "🇸🇾", nombre: "Siria" },
    { bandera: "🇱🇰", nombre: "Sri Lanka" },
    { bandera: "🇿🇦", nombre: "Sudáfrica" },
    { bandera: "🇸🇪", nombre: "Suecia" },
    { bandera: "🇨🇭", nombre: "Suiza" },
    { bandera: "🇹🇭", nombre: "Tailandia" },
    { bandera: "🇹🇼", nombre: "Taiwán" },
    { bandera: "🇹🇿", nombre: "Tanzania" },
    { bandera: "🇹🇳", nombre: "Túnez" },
    { bandera: "🇹🇷", nombre: "Turquía" },
    { bandera: "🇺🇦", nombre: "Ucrania" },
    { bandera: "🇺🇬", nombre: "Uganda" },
    { bandera: "🇺🇾", nombre: "Uruguay" },
    { bandera: "🇺🇿", nombre: "Uzbekistán" },
    { bandera: "🇻🇪", nombre: "Venezuela" },
    { bandera: "🇻🇳", nombre: "Vietnam" },
    { bandera: "🇿🇲", nombre: "Zambia" },
    { bandera: "🇿🇼", nombre: "Zimbabue" }
];

// Función que ordena las nacionalidades e inyecta opciones en el HTML
function cargarNacionalidades() {
    let select = document.getElementById("select-nacionalidad");
    if (!select) return;

    select.innerHTML = '<option value="">Selecciona tu país...</option>';

    let nacionalidadesOrdenadas = [...nacionalidadesConBandera].sort((a, b) =>
        a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
    );

    nacionalidadesOrdenadas.forEach(item => {
        let opcion = document.createElement("option");
        opcion.value = item.nombre;
        opcion.innerText = item.bandera + " " + item.nombre;
        select.appendChild(opcion);
    });
}

// Le decimos al navegador que, en cuanto termine de cargar la web, ejecute la función
window.onload = function() {
    cargarNacionalidades();
};