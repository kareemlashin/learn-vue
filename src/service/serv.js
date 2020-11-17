login() {
                              localStorage.setItem('token', 'token');
                              localStorage.setItem('role', 'one');
                              this.$router.push('/')

                    },
                    handleSubmitForm() {
                              let apiURL = 'http://localhost:4000/api/create-student';

                              axios.post(apiURL, this.student).then(() => {
                                        this.$router.push('/view')
                                        this.student = {
                                                  name: '',
                                                  email: '',
                                                  phone: ''
                                        }
                              }).catch(error => {
                                        console.log(error)
                              });
                    },
                    deleteStudent(id) {
                              let apiURL = `http://localhost:4000/api/delete-student/${id}`;
                              let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

                              axios.delete(apiURL).then(() => {
                                        this.Students.splice(indexOfArrayItem, 1);
                              }).catch(error => {
                                        console.log(error)
                              });

                    },
                    handleUpdateForm(student) {
                              let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

                              axios.post(apiURL, student).then((res) => {
                                        console.log(res)
                                        this.$router.push('/view')
                              }).catch(error => {
                                        console.log(error)
                              });
                    },
                    edit(student) {
                              let apiURL = `http://localhost:4000/api/update-student/${this.$route.params.id}`;

                              axios.put(apiURL, student).then((res) => {
                                        console.log(res)
                                        this.$router.push('/view')
                              }).catch(error => {
                                        console.log(error)
                              });
                    }