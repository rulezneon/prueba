

{

    MiPanel={
        alto= 80,
        ancho= 100,
        ppp=1000,
        tec="led"
    },
    Conexiones=["HDMI","VGA", "USB", "Infrarojo"],
    Botones=
    [
        Encender={
            Simbolo="On/Off",
            EjecutarAccion=fnPrenderApagar,
        },
        volMas={
            Simbolo="V+",
            EjecutarAccion=fnSubirVolumen,
        },
        volMenos={
            Simbolo="V-",
            EjecutarAccion=fnBajarVolumen,
        },
    ]

}






