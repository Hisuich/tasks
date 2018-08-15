var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(prev, cur){
            const a = cur.split('=');
            prev[a[0]] = a[1];
            return prev;
        },
        {}
    );
window.onload = function() {
    const selectors = document.getElementsByClassName("main")[0].getElementsByClassName('item');
    for (let selector of selectors) {
        document.getElementById(selector.id).innerHTML = params[selector.id];
    }

    const delivery = params.delivery ? params.delivery == "toadress" ? 150 : 75 : 0;
    const cost = params.cost;
    const distance = params.distance;
    const calculate = cost * distance + delivery;

    document.getElementById("delivery").innerHTML = params.delivery + `(${delivery})`;
    document.getElementById("calculate").innerHTML = `${cost} * ${distance} + ${delivery} = ${calculate.toFixed(3)}`;
    
}
