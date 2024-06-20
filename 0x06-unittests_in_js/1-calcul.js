const calculateNumber = (type, a, b) => {
    if (type === "SUBTRACT") {
        return Math.round(a) - Math.round(b);
    }
    else if (type === "SUM") {
        return Math.round(a) + Math.round(b);
    }
    else if (type === "DIVIDE") {
        if (Math.round(b) === 0) {
            return 'Error';
        }
        return Math.round(a) / Math.round(b);
    }
    else {
        throw new Error("Type must be SUBSCTRACT, SUM, OR DEVIDE: " + type);
    }
  }

  module.exports = calculateNumber;