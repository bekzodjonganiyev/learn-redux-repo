const randomStr = () => Math.random().toString(36).substring(7)

export const ActionTypes = {
    INIT: `$$customRedux/INIT${randomStr()}`,
    REPLACE: `$$customRedux/REPLACE${randomStr()}`
}