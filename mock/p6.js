class DetectSquares {
    constructor() {
        this.pts = {}
        this.ptsArr = [];
    }

    add(point) {
        if (!this.pts[point]) this.pts[point] = 0;
        this.pts[point] += 1;
        this.ptsArr.push(point);
    }



    count(point) {
        const [px, py] = point;
        let result = 0;
        for (let p of this.ptsArr) {
            const [x, y] = p;
            if (Math.abs(px - x) == Math.abs(py - y) && (px - x != 0) && (py - y != 0)) {
                let c1 = px + "," + y;
                let c2 = x + "," + py;
                if (this.pts[c1] && this.pts[c2]) {

                    result += this.pts[c1] * this.pts[c2];


                }
            }
        }
        return result;
    }
}
/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */