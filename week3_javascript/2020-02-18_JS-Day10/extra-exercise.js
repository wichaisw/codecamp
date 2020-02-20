// Function Exercise 1
function draw1(n) {
    let star = "";
    for (i=0; i<n; i++) {
        star = star + "*";
    }
    return star;
}

console.log (draw1(3))

// Function Exercise 2
function draw2(n) {
    let colStar = "";
    let star = "";
    for (i=0; i<n; i++) {
        star = star + "*";      
    }

    for (col=0; col<n; col++) {
        colStar = colStar + star + "\n";
    }
    return colStar;
}

console.log (draw2(4))

// Function Exercise 3
function draw3(n) {
    let stringNum = "";
    let colStringNum = "";
    for (i=1; i<=n; i++) {
        stringNum = stringNum + i;
    }

    for (col=0; col<n; col++) {
        colStringNum = colStringNum + stringNum + "\n";
    }
    return colStringNum;
}

console.log (draw3(4))

// Function Exercise 4
function draw4(n) {
    let duplicatedNum = ""; 
    let duplicatedRow = "";
    for (i=0; i<n; i++) {       
        for (i=1; i<=n; i++) {
            while (i<n) {
                duplicatedNum = duplicatedNum + i;
            }      
            duplicatedRow = duplicatedRow + duplicatedNum;
        }
        
    }
    return duplicatedRow
}


console.log (draw4(4))


function me1() {
    for (i=1; i<=n; i++) {
        while (i<n) {
            duplicatedNum = duplicatedNum + i;
        }     
    } return duplicatedNum;
}

console.log(me1(5))