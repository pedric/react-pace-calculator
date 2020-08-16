export default class ApiHandler {
  async getLastUpdate() {
    let last_update = {};
    await fetch(window.location.origin + '/api/unsplash/last_update')
      .then(response => response.json())
      .then(data => (last_update = { id: data[0]._id, time: data[0].time }));

    return last_update;
  }

  async updateCacheTimeStamp(id) {
    await fetch(
      `${window.location.origin}/api/unsplash/last_update/update/${id}`,
      { method: 'POST' },
    ).catch(err => console.log(err));
  }

  async updateImagesCollection(data) {
    console.log('trying to update db with: ', data);
    await fetch(window.location.origin + '/api/unsplash', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
  }

  async clearImagesCollection() {
    await fetch(`${window.location.origin}/api/unsplash/delete/images`, {
      method: 'DELETE',
    }).catch(err => console.log(err));
  }
}
