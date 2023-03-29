import { loading } from "../../main";

export function showLoading() {
    loading.classList.remove('hidden')
//  console.log(loading.classList);
}
export function hiddenLoading() {
    loading.classList.add('hidden')

}
