const message = '<div>Hi {{candidate.name}} !</div><div><br></div><div>Thank you for applying! We have received your application and will keep you updated on the process as soon as your application status changes.</div><div><a href="http://Happo">Happo</a></div><div><br></div><div><a href="http://Happo">Happo</a></div><div><br></div><div>Have a nice day!</div><div><br></div><div>Sincerely, </div><div><br></div><div>{{name}} at {{companyName}}</div>';

const preProcessMessage = (m) => {
    if (m.indexOf('<a') < 0) {
        return m;
    }
    return m.split('<a').join('<a style="color: #009fe2;text-decoration: none;"');
}

console.log(preProcessMessage(message));