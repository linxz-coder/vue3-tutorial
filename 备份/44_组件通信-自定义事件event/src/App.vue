<template>
    <h1>
        Vue 3 组件间通信
    </h1>
    <hr>
    <div class="row">
        <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
            <!-- 导航区 -->
            <router-link active-class="active" class="list-group-item" to="/props">1.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/event">2.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/mitt">3.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/model">4.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/attrs">5.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/ref-parent">6.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/provide-inject">7.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/pinia">8.props</router-link>
            <router-link active-class="active" class="list-group-item" to="/slot">9.props</router-link>
        </div>
        <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
            <div class="panel-blody">
                <!-- 展示区 -->
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>









<style scoped>
h1 {
    text-align: center;
    margin-top: 20px;
}

.row {
    display: flex;
}

.col-xs-3,
.col-md-3,
.col-lg-3,
.col-xl-3 {
    width: 25%;
    background-color: #f1f1f1;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.col-xs-9,
.col-md-9,
.col-lg-9,
.col-xl-9 {
    width: 75%;
    padding: 20px;
    background-color: #ffffff;
}

.list-group-item {
    display: block;
    padding: 10px;
    margin-bottom: 5px;
    text-decoration: none;
    color: black;
    background-color: #ffffff;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.list-group-item:hover {
    background-color: #007bff;
    color: white;
}

.active {
    background-color: #007bff !important;
    color: white !important;
}

.panel-blody {
    background-color: #d3d3d3;
    border-radius: 8px;
}
</style>
