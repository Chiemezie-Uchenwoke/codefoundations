const CodeDisplay = () => {
    const code = `
    const items = ["car: 300", "bike: 200"];
    const discount = 0.2;

    const newPrices = items.map((item) => {
        const [name, price] = item.split(":");
        const discountPrice = Number(price.trim()) * (1 - discount);

        return \`\${name.trim()}: \${discountPrice.toFixed(2)}\`;
    });

    console.log(newPrices);
`;

    return code
}

export default CodeDisplay;