function Search(text) {
  const results = [];
  for (const product of products) {
    const isHave = product.name.toLowerCase().search(text.toLowerCase());
    if (isHave !== -1) {
      results.push(product);
    }
  }
  return results;
}
