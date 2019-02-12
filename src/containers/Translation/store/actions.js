import { TRANSLATION_LIST } from './constants';
//Action Creator
const changeList = (list) => ( {
    type: TRANSLATION_LIST,
    list
} )

export const getTranslationList = () => {
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/api/translations.json')
            .then((res) => {
                let list = [];
                if (res.data.success) {
                    list = res.data.data
                }
                dispatch(changeList(list))
            });
    }
}
