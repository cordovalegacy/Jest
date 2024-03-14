export class PasswordChecker {
  public isTooShortCheck(passwordLength: number): boolean {
    if (passwordLength < 8) {
      return false;
    }
    return true;
  }

  public isTooLongCheck(passwordLength: number): boolean {
    if (passwordLength > 20) {
      return false;
    }
    return true;
  }

  public hasSpecialCharacterCheck(password: string): boolean {
    const specialCharArray = ["@", "#", "$", "%", "&", "*"];
    for (let i = 0; i < password.length; i++) {
      console.log(`Checking character: ${password[i]}`);
      if (specialCharArray.includes(password[i])) {
        console.log("Found special character!");
        return true;
      }
    }
    console.log("No special character found.");
    return false;
  }

  public checkPassword(password: string): boolean {
    if (
      this.isTooShortCheck(password.length) &&
      this.isTooLongCheck(password.length) &&
      this.hasSpecialCharacterCheck(password)
    ) {
      return true;
    } else {
      return false;
    }
  }
}



