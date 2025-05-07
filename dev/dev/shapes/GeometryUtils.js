export class GeometryUtils {
    /**
     * Calculate the slope of a line given two points.
     * @param {Object} point1 - The first point {x, y}.
     * @param {Object} point2 - The second point {x, y}.
     * @returns {number} The slope of the line or `Infinity` if vertical.
     */
    static calculateSlope(point1, point2) {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        return dx === 0 ? Infinity : dy / dx;
    }

    /**
     * Calculate the intersection point of two lines.
     * @param {Object} line1 - Line object with startPoint and endPoint.
     * @param {Object} line2 - Line object with startPoint and endPoint.
     * @returns {Object|null} Intersection point {x, y} or null if lines don't intersect.
     */
    static calculateLineIntersection(line1, line2) {
        const { startPoint: p1, endPoint: p2 } = line1;
        const { startPoint: p3, endPoint: p4 } = line2;

        const denominator = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);

        if (denominator === 0) return null; // Parallel or coincident lines

        const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / denominator;
        const u = -((p1.x - p2.x) * (p1.y - p3.y) - (p1.y - p2.y) * (p1.x - p3.x)) / denominator;

        if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
            const xi = p1.x + t * (p2.x - p1.x);
            const yi = p1.y + t * (p2.y - p1.y);
            return { x: xi, y: yi };
        }
        return null;
    }

    /**
     * Calculate the angle between two slopes in radians.
     * @param {number} slope1 - Slope of the first line.
     * @param {number} slope2 - Slope of the second line.
     * @returns {number} The angle in radians between the two slopes.
     */
    static calculateAngleBetweenSlopes(slope1, slope2) {
        if (slope1 === Infinity || slope2 === Infinity) {
            return Math.PI / 2; // 90 degrees for perpendicular lines
        }

        const tanTheta = Math.abs((slope2 - slope1) / (1 + slope1 * slope2));
        return Math.atan(tanTheta);
    }

    static calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    return Math.hypot(dx, dy);
}


    /**
     * Check if a point lies inside a triangle using the area method.
     * @param {Object} point - The point to check {x, y}.
     * @param {Object[]} vertices - Array of triangle vertices [{x, y}, {x, y}, {x, y}].
     * @returns {boolean} True if the point is inside the triangle, false otherwise.
     */
    static isPointInsideTriangle(point, vertices) {
        const [A, B, C] = vertices;

        const area = (p1, p2, p3) =>
            Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);

        const totalArea = area(A, B, C);
        const area1 = area(point, B, C);
        const area2 = area(A, point, C);
        const area3 = area(A, B, point);

        return Math.abs(totalArea - (area1 + area2 + area3)) < 0.1;
    }

    /**
     * Normalize an angle to the range [0, 2π].
     * @param {number} angle - The angle in radians.
     * @returns {number} The normalized angle in radians.
     */
    static normalizeAngle(angle) {
        return (angle + 2 * Math.PI) % (2 * Math.PI);
    }

    /**
     * Calculate the length of a line segment.
     * @param {Object} point1 - The first point {x, y}.
     * @param {Object} point2 - The second point {x, y}.
     * @returns {number} The length of the line segment.
     */
    static calculateLength(point1, point2) {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }


    /**
     * Check if a point lies on a line segment.
     * @param {Object} line - Line object with startPoint and endPoint.
     * @param {Object} point - The point to check {x, y}.
     * @returns {boolean} True if the point lies on the line segment, false otherwise.
     */

    static calculateAngle(point1, point2) {
        const dx = point2.x - point1.x;
        const dy = point2.y - point1.y;
        return Math.atan2(dy, dx); 
    // Returns angle in radians
    }

    static isPointOnLine(line, point) {
        const { startPoint, endPoint } = line;
        const length1 = this.calculateLength(startPoint, point);
        const length2 = this.calculateLength(point, endPoint);
        const lineLength = this.calculateLength(startPoint, endPoint);

        return Math.abs(length1 + length2 - lineLength) < 0.1;
    }

  /**
     * Calculate the area of a shape.
     * Determines the shape type and calls the appropriate static method.
     * @param {Object} shape - The shape object.
     * @returns {number} The area of the shape.
     */
    static calculateArea(shape) {
        switch (shape.constructor.name) {
            case 'Triangle':
                return GeometryUtils.calculateTriangleArea(shape.points);
            case 'Rectangle':
                return GeometryUtils.calculateRectangleArea(shape.points);
            case 'Circle':
                return GeometryUtils.calculateCircleArea(shape.radius);
            case 'Polygon':
                return GeometryUtils.calculatePolygonArea(shape.points);
            default:
                throw new Error(`Area calculation not implemented for shape type: ${shape.constructor.name}`);
        }
    }

    /**
     * Calculate the area of a triangle.
     * @param {Object[]} points - Array of triangle vertices [{x, y}, {x, y}, {x, y}].
     * @returns {number} The area of the triangle.
     */
    static calculateTriangleArea(points) {
        const [p1, p2, p3] = points;
        return Math.abs((p1.x * (p2.y - p3.y) + p2.x * (p3.y - p1.y) + p3.x * (p1.y - p2.y)) / 2);
    }

    /**
     * Calculate the area of a rectangle.
     * @param {Object[]} points - Array of rectangle vertices [{x, y}, {x, y}].
     * @returns {number} The area of the rectangle.
     */
    static calculateRectangleArea(points) {
        const [p1, p2] = points; // Assume points[0] is bottom-left, points[1] is top-right
        return Math.abs((p2.x - p1.x) * (p2.y - p1.y));
    }

    /**
     * Calculate the area of a circle.
     * @param {number} radius - The radius of the circle.
     * @returns {number} The area of the circle.
     */
    static calculateCircleArea(radius) {
        return Math.PI * radius ** 2;
    }

    /**
     * Calculate the area of a polygon using the Shoelace formula.
     * @param {Object[]} points - Array of polygon vertices [{x, y}, {x, y}, ...].
     * @returns {number} The area of the polygon.
     */
    static calculatePolygonArea(points) {
        let area = 0;
        const n = points.length;
        for (let i = 0; i < n; i++) {
            const j = (i + 1) % n; // Next vertex (wraps around to 0)
            area += points[i].x * points[j].y - points[j].x * points[i].y;
        }
        return Math.abs(area / 2);
    }

}


export const calculateAngle = GeometryUtils.calculateAngle;
export const calculateArea = GeometryUtils.calculateArea;
export const calculateLength = GeometryUtils.calculateLength;
export const calculateDistance = GeometryUtils.calculateDistance;
export const calculateSlope = GeometryUtils.calculateSlope;

