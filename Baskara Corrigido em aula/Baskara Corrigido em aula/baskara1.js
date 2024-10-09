function baskara() {
    // Função :
    // Autor :
    // Data : 25/07/2017
    // Seção de Declarações
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    let xm = 0;
    let xn = 0;
    let d = 0;
    let r = 0;
    let dn = 0;

        // Seção de Comandos
        d = ((b*b)-(4*a*c));

        if (d<0) {
            dn = !!d;
            d = dn;

            r = Math.sqrt(d);
            xm = ((-b + (r))/(2*a));
            xn = ((-b - (r))/(2*a));
           
            document.getElementById('resultado').textContent = `As raízes imaginárias são: x1 = ${xm.toFixed(2)}! e x2 = ${xn.toFixed(2)}!`; 

        }else{
            r = Math.sqrt(d);
            xm = ((-b + (r))/(2*a));
            xn = ((-b - (r))/(2*a));
            
            document.getElementById('resultado').textContent = `As raízes são: x1 = ${xm.toFixed(2)} e x2 = ${xn.toFixed(2)}`;
        }
}