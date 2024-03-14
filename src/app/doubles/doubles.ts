export type StringInfo = {
  lowerCase?: string;
  upperCase?: string;
  characters?: string[];
  length: number;
  extraInfo: Record<string, string> | undefined;
};

type LoggerServiceCallBack = (arg: string) => void;

export function calculateComplexity(stringInfo: StringInfo): number {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length
}

export function toUpperCaseWithCallback(arg: string, callBack: LoggerServiceCallBack){
    if(!arg){
        callBack('Invalid Argument!')
        return;
    }
    callBack('called function with arg' + arg)
    return arg.toUpperCase();
}