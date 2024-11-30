function  calcularRecipiente() {
    presion =  parseFloat( document.querySelector('#Presion').value );
    diametro = parseFloat( document.querySelector('#Diametro').value );
    longitud = parseFloat( document.querySelector('#Longitud').value );
    material = parseFloat( document.querySelector('#Material').value );
    materia =  parseFloat(material);
    UTS = 0;
    Ys  = 0;
    
    /* Definir esfuerzos del material de acuerdo al tipo de material */

    switch(materia) {
        case 1:
            UTS = 415;
            Ys  = 230;  
        break;
        case 2:
            UTS = 450;
            Ys  = 275;  
        break;
        case 3:
            UTS = 485;
            Ys  = 275;  
        break;
        case 4:
            UTS = 415;
            Ys  = 220;  
        break;
        case 5:
            UTS = 485;
            Ys  = 260;  
        break;
    }

    /* Esfuerzo permisible */
    S = Math.min(UTS/3.5,Ys*2/3)
    /* Eficiencia de las juntas */

    eficiencia = document.querySelector("#Eficiencia").value;
    eficiencia = parseFloat(eficiencia);
    eta = 0;	
    switch(eficiencia) {
        case 1:
            eta = 1;
        break;
        case 2:
            eta = 0.85;
        break;
        case 3:
            eta = 0.75;
        break;
    }

    tcaltapas  = (presion*(diametro))/(2*eta*S - 0.2*presion);
    tcalcuerpo = (presion*(diametro/2))/(eta*S - 0.6*presion);

    tcaltapas =  tcaltapas / 0.0254;
    tcalcuerpo = tcalcuerpo / 0.0254;

    vthicknessbody = parseFloat(document.querySelector('#espesorcuerpocomercial').value);
    let tcomercialbody = 0;
    switch(vthicknessbody){
        case 1:
            tcomercialbody = 1/8;
        break;  
        case 2:
            tcomercialbody = 1/4;
        break;  
        case 3:
            tcomercialbody = 3/8;
        break;  
        case 4:
            tcomercialbody = 5/8;
        break;  
        case 5:
            tcomercialbody = 3/4;
        break;  
        case 6:
            tcomercialbody = 7/8;
        break;  
        case 7:
            tcomercialbody = 1;
        break;  
        case 8:
            tcomercialbody = 1 + 1/4;
        break;  
        case 9:
            tcomercialbody = 1 + 1/2;
        break;  
        case 10:
            tcomercialbody = 1 + 3/4;
        break;  
        case 11:
            tcomercialbody = 2;
        break;  

    }
    /* Espesor comercial de las tapas */
    vthicknesstapa = parseFloat( document.querySelector('#espesortapascomercial').value );
    tcomercialtapa = 0;
    switch(vthicknesstapa){
        case 1:
            tcomercialtapa = 1/8;
        break;  
        case 2:
            tcomercialtapa = 1/4;
        break;  
        case 3:
            tcomercialtapa = 3/8;
        break;  
        case 4:
            tcomercialtapa = 5/8;
        break;  
        case 5:
            tcomercialtapa = 3/4;
        break;  
        case 6:
            tcomercialtapa = 7/8;
        break;  
        case 7:
            tcomercialtapa = 1;
        break;  
        case 8:
            tcomercialtapa = 1 + 1/4;
        break;  
        case 9:
            tcomercialtapa = 1 + 1/2;
        break;  
        case 10:
            tcomercialtapa = 1 + 3/4;
        break;  
        case 11:
            tcomercialtapa = 2;
        break;  

    }

    if(tcomercialbody < tcalcuerpo) {
        document.querySelector('#espesorcalculadocuerpo').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesorcalculadocuerpo').style.color = 'rgb(156,0,6)';

    } else {
        document.querySelector('#espesorcalculadocuerpo').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesorcalculadocuerpo').style.color = 'rgb(0,97,0)';    
    }

    if(tcomercialtapa < tcaltapas) {
        document.querySelector('#espesorcalculadotapas').style.backgroundColor = 'rgb(255,199,206)';
        document.querySelector('#espesorcalculadotapas').style.color = 'rgb(156,0,6)';

    } else {
        document.querySelector('#espesorcalculadotapas').style.backgroundColor = 'rgb(198,239,206)';
        document.querySelector('#espesorcalculadotapas').style.color = 'rgb(0,97,0)';    
    }


    Vtapas  = (Math.PI/12)*(Math.pow(diametro + 2*tcomercialtapa*0.0254,3) - Math.pow(diametro,3));
    Vcuerpo = (Math.PI*longitud/4)*(Math.pow((diametro + 2*tcomercialbody*0.0254),2) - Math.pow(diametro,2));

    Vtotal = Vtapas + Vcuerpo;
    pesoVacio = 7800 * Vtotal;

    document.querySelector('#espesorcalculadotapas').value = tcaltapas.toFixed(4);
    document.querySelector('#espesorcalculadocuerpo').value = tcalcuerpo.toFixed(4);
    document.querySelector('#pesovacio').value =  pesoVacio.toFixed(0);

    /* Calcular volumen y peso del líquido */
    let Vtapas_liquido  = (Math.PI/12)*Math.pow(diametro,3);
    let Vcuerpo_liquido = (Math.PI*longitud/4)*Math.pow(diametro,2)
    let VTliquido = Vtapas_liquido + Vcuerpo_liquido;
    let densidad = document.querySelector('#Densidad').value;
    Pliquido = densidad * VTliquido;
    document.querySelector('#pesolleno').value = (pesoVacio + Pliquido).toFixed(0); 

}