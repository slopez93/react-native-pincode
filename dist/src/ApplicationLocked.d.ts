/// <reference types="react" />
import { PinResultStatus } from "./utils";
import * as React from "react";
export declare type IProps = {
    buttonComponent?: any;
    changeStatus: (status: PinResultStatus) => void;
    colorIcon?: string;
    iconComponent?: any;
    lockedIconComponent?: any;
    nameIcon?: string;
    onClickButton: any;
    pinAttemptsAsyncStorageName: string;
    sizeIcon?: number;
    styleButton?: any;
    styleMainContainer?: any;
    styleText?: any;
    styleTextButton?: any;
    styleTextTimer?: any;
    styleTitle?: any;
    styleViewButton?: any;
    styleViewIcon?: any;
    styleViewTextLock?: any;
    styleViewTimer?: any;
    textButton: string;
    textDescription?: string;
    textSubDescription?: string;
    textTitle?: string;
    timePinLockedAsyncStorageName: string;
    timeToLock: number;
    timerComponent?: any;
    titleComponent?: any;
};
export declare type IState = {
    timeDiff: number;
};
declare class ApplicationLocked extends React.PureComponent<IProps, IState> {
    static defaultProps: Partial<IProps>;
    timeLocked: number;
    isUnmounted: boolean;
    constructor(props: IProps);
    componentDidMount(): void;
    timer(): Promise<void>;
    componentWillUnmount(): void;
    renderButton: () => any;
    renderTimer: (minutes: number, seconds: number) => any;
    renderTitle: () => any;
    renderIcon: () => any;
    renderErrorLocked: () => any;
    render(): any;
}
export default ApplicationLocked;
