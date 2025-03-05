//function for updating message coming from server
export function updateLocalStorageMesaageFromServer(data) {
  if (!localStorage.getItem(`${data.id}`)) {
    let msg = { msgs: [{ recieved: data.msg }] };
    localStorage.setItem(`${data.id}`, JSON.stringify(msg));
  } else {
    let msg = JSON.parse(localStorage.getItem(`${data.id}`));
    msg.msgs.push({ recieved: data.msg });
    localStorage.setItem(`${data.id}`, JSON.stringify(msg));
  }
}
//function for updating message sent by user
export function updateLocalStorageMesaageFromUserItself(data) {
  if (!localStorage.getItem(`${data.id}`)) {
    let msg = { msgs: [{ sent: data.msg }] };
    localStorage.setItem(`${data.id}`, JSON.stringify(msg));
  } else {
    let msg = JSON.parse(localStorage.getItem(`${data.id}`));
    msg.msgs.push({ sent: data.msg });
    localStorage.setItem(`${data.id}`, JSON.stringify(msg));
  }
}
