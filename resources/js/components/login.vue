<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-progress-linear
                    :active="loading"
                    :indeterminate="loading"
                    absolute
                    bottom
                    color="deep-purple accent-4">
                    </v-progress-linear>

                    <!-- Form validation -->
                    <v-form
                        ref="form"
                        v-model="valid"
                        >

                  <v-text-field
                    label="Login"
                    name="login"
                    v-model="email"
                    :rules="emailRules"
                    required
                    prepend-icon="mdi-account"
                    type="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    :rules="passwordRules"
                    required
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" :disabled="!valid" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
              <v-snackbar
            v-model="snackbar"
            >
            {{ text }}

            <template v-slot:action="{ attrs }">
                <v-btn
                color="deep-purple"
                text
                v-bind="attrs"
                @click="snackbar = false"
                >
                Close
                </v-btn>
            </template>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
      data() {
          return {
              valid: true,
              email: '',
              emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
              password: '',
              passwordRules: [
                v => !!v || 'Password is required',
            ],
              text: '',
              loading: false,
              snackbar : false,
          }
      },
      methods: {
          login: function(){
              axios.interceptors.request.use((config) => {
                  this.loading = true;
                return config;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });

            // Add a response interceptor
            axios.interceptors.response.use((response) => {
                  this.login = false;
                return response;
            }, (error) => {
                this.loading = false
                return Promise.reject(error);
            });
            axios.post('/api/login', {'email' : this.email, 'password' : this.password})
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('loggedIn', true)
                this.$router.push('/dashboard')
                .then(res => console.log('LoggedIn successfully'))
                .catch(err => console.log(err))
            })
            .catch( err => {
                this.text = err.response.data.status
                this.snackbar = true;
            })
          }
      }
  }
</script>
<style scoped>

</style>
