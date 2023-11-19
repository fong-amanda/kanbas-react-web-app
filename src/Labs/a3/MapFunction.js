function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;

    const squares = numberArray1.map(square);
    const cubes = numberArray1.map(a => a * a * a);

    const q = [1, 2, 3, 4, 5]
    const w = q.map(a => a === 3 ? 6 : a)

    const y = [123, 234, 345, 456]
    const z = [y[1], ...y]

    return (
        <div>
            <h2>Map</h2>
            squares = {squares}<br />
            cubes = {cubes}<br />
            w ={w}
            
            <br />
            <label for="email">Email</label>
            <input
                value="alice@wonderland.com"
                placeholder="john@doe.com"
                id="email"
                title="Type your email" />
            <br />
            z = {JSON.stringify(z)}
        </div>
    )
}

export default MapFunction