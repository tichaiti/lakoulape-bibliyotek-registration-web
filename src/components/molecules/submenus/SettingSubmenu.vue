<template>
  <el-submenu index="3">
    <template slot="title">
      <i class="el-icon-setting"></i>Settings
    </template>
    <el-menu-item-group>
      <template slot="title">Group 1</template>
      <el-menu-item index="3-1">Option 1</el-menu-item>
      <el-menu-item index="3-2">Option 2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="Group 2">
      <el-menu-item index="3-3">Option 3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="3-4">
      <template slot="title">Option 4</template>
      <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
    </el-submenu>
  </el-submenu>
</template>
