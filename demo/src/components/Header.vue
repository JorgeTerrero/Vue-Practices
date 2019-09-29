<template>
    <div>
        
          <nav>
                <ul class="nav nav-pills float-right">
                      <li class="nav-link"> <router-link to="/" >Home</router-link></li>
                       <li class="nav-link"> <router-link to="/about" >About</router-link></li>
                        <li class="nav-link"> <router-link to="/features" >Features</router-link></li>
                </ul>
          </nav>
 
    </div>
</template>

<script>
export default {
    name: 'Header'  ,
    components:{

    }
}
</script>

