let st = `063-111-1234
(333) 456-8768
4446575547`;

const phoneNumbers = st.split('\n');

const formattedNumbers = phoneNumbers.map(number => {
  const cleanNumber = number.replace(/\D/g, '');

  if (cleanNumber.length === 10) {
    const areaCode = cleanNumber.slice(0, 3);
    const firstPart = cleanNumber.slice(3, 6);
    const secondPart = cleanNumber.slice(6, 10);

    return `(${areaCode}) ${firstPart} ${secondPart}`;
  }
  
  return number; 
});

formattedNumbers.forEach(formattedNumber => {
  console.log(formattedNumber);
});
