const getDonations = () =>{
    const storedDonations = localStorage.getItem('setDonations');
    if(storedDonations){
        return JSON.parse(storedDonations)
    }
    return []
}

const saveDonations = (id) => {
    const storedDonations = getDonations();
    const existDonation = storedDonations.find(donationId => donationId === id);
    if(!existDonation){
        storedDonations.push(id);
        localStorage.setItem('setDonations', JSON.stringify(storedDonations))
    }
}

export {getDonations, saveDonations}