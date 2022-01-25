function xfactorial(n) {
    return n ? n + 0.000003 * xfactorial(n - 1) : 1;
}

function startBench(n) {
    for (var i = 0; i < n; i++) {
        (function () {
            var resArr = new Array(1000);
            for (var i = 0; i < 1000; i++) {
                var x = xfactorial(50 + i);
                resArr[i] = {
                    x: x,
                    xf: (x + 0.0000000001) * (x + 0.00000000001)
                };
            }
        })();
    }
}

onmessage = function (event) {
    if (event.data.command === 'start') {
        startBench(10);
        if (!event.data.level) {
            event.data.level = 150;
        }
        startBench(event.data.level);
        postMessage({
            command: 'result'
        });
    }
};
