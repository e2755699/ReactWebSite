import $ from 'jquery'
export default (url,data = {}) => {
    let promise = new Promise ((resolve, reject) => {
        $.ajax({
            url: url,
            data: data,
            timeout: 50 * 1000,
            dataType: 'json'            
        }).done((result) => {
            resolve(result);
        }).fail((jqXHR, textStatus, errorThrown) => {
            reject(jqXHR, textStatus, errorThrown);          
        });
    })
    return promise;
}