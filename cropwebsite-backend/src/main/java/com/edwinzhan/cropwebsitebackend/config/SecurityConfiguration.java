package com.edwinzhan.cropwebsitebackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // 配置 CORS
                .csrf(AbstractHttpConfigurer::disable) // 禁用 CSRF，如果需要则配置
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll() // 允许所有请求
                );
        return http.build();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:5000", "http://localhost:3456","https://edwinzhan.tech","https://cropweb-api.azure-api.net")); // 允许来自此来源的请求
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE")); // 允许的 HTTP 方法
        configuration.setAllowedHeaders(List.of("*")); // 允许的请求头
        configuration.setAllowCredentials(true); // 是否允许发送 Cookie

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // 应用 CORS 配置到所有路径
        return source;
    }
}