function numUniqueEmails(emails: string[]): number {

    const validEmails = new Set(emails.map((email) => {
        let [name, domain] = email.split("@");
        name = name.replace(/\./g, "").replace(/\+.*$/, "")
        return name+"@"+domain
    }))
    
    return validEmails.size
};