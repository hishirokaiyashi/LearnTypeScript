/* "không bao giờ" trả ra giá trị. promise!
 */
/*  */
function handleException(errorMessage: string): never {
  throw Error(errorMessage);
}

handleException("Just a test error"); //in ra dòng message và error
