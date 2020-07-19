
const result = (transanctions) => {
   let negative = 0
   let some = 0
   let total = 0
   if (transanctions !== 0) {
      let newBalance = transanctions.report.map(transaction => {
         const { value, type } = transaction;
         let id = 0
         return {
            id: ++id,
            value,
            type,
         }
      })
      some = newBalance.reduce((acc, curr) => {
         return curr.type === "+" ? acc + curr.value : acc + 0;

      }, 0);

      negative = newBalance.reduce((acc, curr) => {
         return curr.type === "-" ? acc + curr.value : acc + 0;

      }, 0);

      total = some - negative;

      return { negative, some, total }
   }
   else {
      return { some, negative, total }
   }
}

export default { result }